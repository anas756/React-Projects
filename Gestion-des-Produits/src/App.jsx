import React, { useState } from "react";
import ListeProduits from "./ListeProduits";
import FormulaireProduit from "./FormulaireProduit";

function App() {
  // 1️⃣ Liste initiale de produits
  const [produits, setProduits] = useState([
    { id: 1, libelle: "Stylo", prix: 5, quantite: 20 },
    { id: 2, libelle: "Cahier", prix: 15, quantite: 10 },
    { id: 3, libelle: "Crayon", prix: 3, quantite: 30 },
    { id: 4, libelle: "Règle", prix: 7, quantite: 12 },
    { id: 5, libelle: "Gomme", prix: 4, quantite: 25 },
  ]);

  // 2️⃣ État pour cacher/afficher la liste
  const [visible, setVisible] = useState(true);

  // 3️⃣ Fonction pour supprimer un produit
  const supprimerProduit = (id) => {
    setProduits(produits.filter((p) => p.id !== id));
  };

  // 4️⃣ Fonction pour ajouter un produit
  const ajouterProduit = (nouveau) => {
    const id = produits.length > 0 ? produits[produits.length - 1].id + 1 : 1;
    setProduits([...produits, { id, ...nouveau }]);
  };

  return (
    <div style={{ margin: "30px" }}>
      <h1>🛒 Gestion des Produits</h1>

      {/* Formulaire d’ajout */}
      <FormulaireProduit ajouterProduit={ajouterProduit} />

      {/* Bouton pour cacher/afficher */}
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"}
      </button>

      {/* Liste des produits */}
      {visible && (
        <ListeProduits
          produits={produits}
          supprimerProduit={supprimerProduit}
        />
      )}
    </div>
  );
}

export default App;
