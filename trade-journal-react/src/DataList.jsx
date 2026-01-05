import { useContext } from "react";
import { DataContext } from "./DataContext";

export default function DataList(){

    const {data, dispatch } = useContext(DataContext);
    if (data.length === 0){
        return(
            <p>No data found!</p>
        )
    }

    return(
        <div>
            {data.map((d) => (
                <div key={d.id}>
                    <h3>Pair: {d.pair}</h3>
                    <p>Win or Loss: {d.outcome}</p>
                    <p>Pnl: {d.profit}$</p>
                    <button 
                        onClick={() =>
                        dispatch({type: "Delete_data", payload: d.id})}>
                        Delete
                    </button>
                    <br />
                </div>
            ))}
        </div>
    );
}