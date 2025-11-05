import React, {useState} from "react"

function MyComponent(){
    const [name, setName] = useState();
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Anas");
    }
    const updateAge = () => {
        setAge(age +1);
    }
    const employmentStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return(
        <>
        <h3>Name: {name}</h3>
        <button onClick={updateName}>Set Name</button>

        <h3>Age: {age}</h3>
        <button onClick={updateAge}>Increment Age</button>

        <h3>Is Employed: {isEmployed ? "Yes" : "No"}</h3>
        <button onClick={employmentStatus}>toggle Status</button>
        </>
    )
}
export default MyComponent