import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { useLocation } from "react-router-dom";
import { data } from "autoprefixer";
import { Toaster, toast } from "react-hot-toast";
import Swal from "sweetalert2";

const CheckoutForm = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const classId = queryParams.get("classId");
  const classData = JSON.parse(queryParams.get("classData"));

  // console.log(classId);

  // console.log(classData, classId);

  const price = classData.price;

  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const [cardError, SetCardError] = useState("");

  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);

  const [succeeded, setSucceeded] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [axiosSecure, price]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);
    console.log(card);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      SetCardError(error.message);
      //  console.log(error.code);
    } else {
      SetCardError("");
      // console.log("[PaymentMethod]", paymentMethod);
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      SetCardError(confirmError);
    }

    console.log("daka", paymentIntent);
    setProcessing(true);
    if (paymentIntent.status == "succeeded") {
      setSucceeded(
        `payment successfully completed And you will receive Transaction id :${paymentIntent.id}`
      );
      const transactionId = paymentIntent.id;
      ///payments information saved in database

      const paymentInfo = {
        Date: new Date().toLocaleString(),
        email: user?.email,
        transaction_id: transactionId,
        pay: paymentIntent.amount,
        created: paymentIntent.created,
        currency: paymentIntent.currency,
        status: paymentIntent.status,
      };

      axiosSecure.post("/payments", paymentInfo).then((res) => {
        // console.log(res.data);
        //td
        if (res.acknowledged) {
        }
      });

      const successfullyData = { ...classData, ...paymentInfo };

      axiosSecure
        .delete("/select/classes", { params: { classId } })
        .then((res) => {
          //  console.log(res.data);
          //TODO
        });

      //  ---- remove class

      axiosSecure
        .post("/payments/successfully", successfullyData)
        .then((res) => {
          // console.log(res.data);
          if (res.acknowledged) {
            toast.success(
              `${user.displayName} your payment has been successfully completed`
            );
          }
          //TODO
        });

      axiosSecure.patch("/classes/all-up", { classId }).then((res) => {
        console.log(res.data);
        // TODO:
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-warning mt-5 btn-sm"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
          <Toaster></Toaster>
        </button>
      </form>
      {cardError && <p className="text-red-500 text-2xl">{cardError}</p>}
      {succeeded && <p className="text-green-500 text-2xl">{succeeded}</p>}
    </div>
  );
};

export default CheckoutForm;
