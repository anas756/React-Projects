import { useState } from "react";

function App() {
  const [afficher, setAfficher] = useState(true);

  const HandleButton = () => {
    setAfficher(!afficher);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Affichage conditionné</h1>

      {afficher && (<div><h3>Bonjour</h3><h3>Bonsoir</h3></div>)}

      <button onClick={HandleButton}>{afficher ? "Cacher" : "Afficher"}</button>

      <h1 style={{ marginTop: "40px" }}>Suite de l'application</h1>
    </div>
  );
}

export default App;
