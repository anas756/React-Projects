import { createContext, useState } from "react";

export const CompteurContext = createContext();


export function CompteurProvider({children}){

    const [compteur, setCompteur] = useState(0);

    const increment = () => setCompteur(compteur +1);
    const decrement = () => setCompteur(compteur - 1);

    return(
        <CompteurContext.Provider value={{compteur, increment, decrement}}>
            {children}
        </CompteurContext.Provider>
    );
}