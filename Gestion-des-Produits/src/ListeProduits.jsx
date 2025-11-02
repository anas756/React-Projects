import React from "react";

function ListeProduits({ produits, supprimerProduit }) {
  return (
    <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Libellé</th>
          <th>Prix</th>
          <th>Quantité</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {produits.map((p) => (
          <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.libelle}</td>
            <td>{p.prix}</td>
            <td>{p.quantite}</td>
            <td>
              <button onClick={() => supprimerProduit(p.id)}>Supprimer</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ListeProduits;
