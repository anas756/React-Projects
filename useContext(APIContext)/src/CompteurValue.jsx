import { useContext } from "react";
import { CompteurContext } from "./CompteurContext.jsx";

export default function CompteurValue() {
  const { compteur } = useContext(CompteurContext);

  return <h1>Compteur : {compteur}</h1>;
}
