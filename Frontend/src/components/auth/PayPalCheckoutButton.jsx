import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalCheckoutButton = () => {
  return (
    <PayPalScriptProvider options={{ "client-id": "YOUR_SANDBOX_CLIENT_ID" }}>
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: "10.00", // Change amount as per your use case
              },
            }],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            alert(`Transaction completed by ${details.payer.name.given_name}`);
          });
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalCheckoutButton;
