import { Elements } from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
// import useCart from "../../../Hooks/useCart";

const Payment = () => {
//   const [cart] = useCart();

//   const totalPrice = cart.reduce((sum, items) => items.price + sum, 0);
//   const price = parseFloat(totalPrice.toFixed(2));

  //
  const stripePromise = loadStripe(import.meta.env.VITE_payment_Gateway_OK);
  return (
    <div className="w-1/2">
  

      <Elements stripe={stripePromise}>
        {/* <CheckoutForm price={price} /> */}
        <h1>ff</h1>
      </Elements>
    </div>
  );
};

export default Payment;
