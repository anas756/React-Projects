import { createContext, useReducer, useState } from "react";

export const DataContext = createContext();

export const initialState = [
    {id: 1, pair: "Xauusd", outcome: "Win", profit: 190},
    {id: 2, pair: "petrol", outcome: "Loss", profit: -50},
    {id: 3, pair: "Xagusd", outcome: "Win", profit: 230}
];

export const reducer = (state, action) => {
    switch(action.type){
        case "Add_data":
            return[...state, action.payload];
        case "Delete_data":
            return state.filter((state) => state.id !== action.payload);
        default:
            state;
    }
};
export const DataProvider = ({children}) => {

const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <DataContext.Provider value={{data: state, dispatch}}>
            {children}
        </DataContext.Provider>  
    )
}