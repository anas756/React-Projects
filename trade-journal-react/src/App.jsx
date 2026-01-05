import {DataProvider } from "./DataContext";
import AddData from "./AddData";
import DataList from "./DataList";

function App(){
  return(
    <DataProvider>
      <div>
        <h1>Journal Your Trades!</h1>
        <AddData/>
        <DataList/>
      </div>
    </DataProvider>
  )
}
export default App;