import { useContext } from "react"
import { CompteurContext } from "./CompteurContext"

export default function IncrementButton(){
    const {increment} = useContext(CompteurContext);

    return(
      <button onClick={increment}>
        Incrememter
      </button>
    );
}