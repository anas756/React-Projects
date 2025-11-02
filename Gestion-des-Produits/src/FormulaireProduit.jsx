import React, { useState } from "react";

function FormulaireProduit({ ajouterProduit }) {
  const [libelle, setLibelle] = useState("");
  const [prix, setPrix] = useState("");
  const [quantite, setQuantite] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!libelle || !prix || !quantite) return alert("Tous les champs sont obligatoires !");
    ajouterProduit({
      libelle,
      prix: parseFloat(prix),
      quantite: parseInt(quantite),
    });
    // Réinitialiser les champs
    setLibelle("");
    setPrix("");
    setQuantite("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Libellé"
        value={libelle}
        onChange={(e) => setLibelle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Prix"
        value={prix}
        onChange={(e) => setPrix(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantité"
        value={quantite}
        onChange={(e) => setQuantite(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default FormulaireProduit;
