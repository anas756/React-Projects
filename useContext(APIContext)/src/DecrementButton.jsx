import { useContext } from "react";
import { CompteurContext } from "./CompteurContext.jsx";

export default function DecrementButton() {
  const { decrement } = useContext(CompteurContext);

  return (
    <button onClick={decrement}>
      Decrementer
    </button>
  );
}
