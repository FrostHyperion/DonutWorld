import { loadStripe } from "@stripe/stripe-js";

let stripePromise;
const Stripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51M7ilmDvDXyfD6vsxfM1qYe4SKG52Wla4G7KxNbCmiGRq5RWBtcUPFOjISR05AwIfH7dxK9fBo2MlEP84QyCd6lj00DvxXL6De"
    );
  }
  return stripePromise;
};

export default Stripe;
