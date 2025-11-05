import List from "./List"

export default function App() {
  const fruits = [{id: 1, name: "Apple", calories: 95},
                  {id: 2, name: "Banana", calories: 105},
                  {id: 3, name: "Cocunat", calories: 159},
                  {id: 4, name: "PineApple", calories: 79},
                  {id: 5, name: "Lemon", calories: 49}];

  const vegetables = [{id: 6, name: "potatoas", calories: 159},
                      {id: 7, name: "carrots", calories: 69},
                      {id: 8, name: "onion", calories: 134},
                      {id: 9, name: "brocoly", calories: 89},
                      {id: 10, name: "corn", calories: 119}];
  return (
    <>
    {fruits.length > 0 && <List items = {fruits} category = "Fruits"/>}
    {vegetables.length > 0 && <List items = {vegetables} category = "Vegetables"/>}
    {/* {console.log(fruits.length)} just wanted to check how lenght for objects list work! */}
    </> 
  )
}