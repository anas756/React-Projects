import React, { useState } from 'react';

const etudiantL = [
  { id: 1, nom: "Benali", prenom: "Ahmed", age: 21 },
  { id: 2, nom: "Lahmar", prenom: "Sara", age: 20 },
  { id: 3, nom: "Zeroual", prenom: "Omar", age: 22 },
  { id: 4, nom: "Haddad", prenom: "Nadia", age: 19 },
  { id: 5, nom: "Toumi", prenom: "Yassine", age: 23 },
  { id: 6, nom: "Benslimane", prenom: "Rania", age: 20 },
  { id: 7, nom: "Cherif", prenom: "Mohamed", age: 21 },
  { id: 8, nom: "Khaldi", prenom: "Imane", age: 22 },
  { id: 9, nom: "Amrani", prenom: "Hicham", age: 24 },
  { id: 10, nom: "Mansouri", prenom: "Leila", age: 19 },
];

export default function EtudiantTable() {
  const [etudiants, setEtudiants] = useState(etudiantL);

  const handleDelete = (id) => {
    const newList = etudiants.filter((etudiant) => etudiant.id !== id);
    setEtudiants(newList);
  };

  return (
    <div>
      <h2>Liste des Étudiants</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Âge</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {etudiants.map((etudiant) => (
            <tr key={etudiant.id}>
              <td>{etudiant.id}</td>
              <td>{etudiant.nom}</td>
              <td>{etudiant.prenom}</td>
              <td>{etudiant.age}</td>
              <td>
                <button onClick={() => handleDelete(etudiant.id)}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}