import CompteurValue from "./CompteurValue.jsx";
import IncrementButton from "./IncrementButton.jsx";
import DecrementButton from "./DecrementButton.jsx";
import { CompteurProvider } from "./CompteurContext.jsx";

export default function App() {
  return (
    <>
      <h1>Context API (Composants separes)</h1>
      <CompteurProvider>
        <IncrementButton />
        <CompteurValue/>
        <DecrementButton />
      </CompteurProvider>
    </>
  );
}
