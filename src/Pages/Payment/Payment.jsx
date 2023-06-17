import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Payment = () => {
  const [payPrice, setPayPrice] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const price = queryParams.get("price");

   setPayPrice(parseFloat(price));
  }, [location]);


  // console.log(price);

  const stripePromise = loadStripe(import.meta.env.VITE_payment_Gateway_OK);
  return (
    <div>
      <h1 className="text-2xl uppercase font-semibold">
        please process payment
      </h1>
      <div className="w-full">
        <Elements stripe={stripePromise}>
       
          <CheckoutForm price={payPrice}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
