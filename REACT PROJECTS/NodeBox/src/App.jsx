import { useState } from "react";

import "./style.css";
import CreditCardForm from "./Components/CreditCardForm";
import CreditCard from "./Components/CreditCard";

const initialState = {
  number: "",
  name: "",
  validThru: "",
  cvv: ""
};

export default function App() {
  const [state, setState] = useState(initialState);

  const handleChange = (key, value) => {
    const newState = { ...state };
    newState[key] = value;
    setState(newState);
  };

  return (
    <div className="container">
      <h1>Credit Card Input Widget</h1>
      <CreditCard cardInfo={state} />
      <CreditCardForm handleChange={handleChange} />

      <button type="submit" className="pay" onClick={() => console.log(state)}>
        Pay
      </button>
    </div>
  );
}
