import { useContext, useState } from "react";
import { DataContext } from "./DataContext";

export default function AddData(){

    const { dispatch } = useContext(DataContext);

    const [pair, setPair] = useState("");
    const [outcome, setOutcome] = useState("");
    const [profit, setProfit] = useState("");

    const HandleSubmit = (e) => {
        e.preventDefault();

        if (!pair || !outcome || !profit){
            window.alert("You will have to add Data to Journal");
            return;
        }

        dispatch({type: "Add_data", payload: {id: Date.now(), pair, outcome, profit: Number(profit)}});

        setPair("");
        setOutcome("");
        setProfit("");

    }

    return(
        <form onSubmit={HandleSubmit}>
            <input 
             type="text"
             placeholder="Pair" 
             value={pair} 
             onChange={(e) => setPair(e.target.value)}
             />
<br />
             <input 
             type="text" 
             placeholder="Win or Loss"
             value={outcome}
             onChange={(e) => setOutcome(e.target.value)}
             />
<br />
            <input 
            type="number" 
            placeholder="Pnl"
            value={profit}
            onChange={(e) => setProfit(e.target.value)}/>
<br />
            <button type="submit">Submit</button>
        </form>
    );
}