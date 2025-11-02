import React, { useState } from 'react';

function Ajouter() {
  const [etudiant, setEtudiant] = useState([
    { name: 'Ali', lastName: 'Ben', age: 25 },
    { name: 'Sara', lastName: 'Amine', age: 30 },
  ]);

  const [newName, setNewName] = useState('');
  const [newLastName, setNewLastName] = useState('');
  const [newAge, setNewAge] = useState('');

  const handleDeleteItem = (index) => {
    const newArr = etudiant.filter((el, idx) => idx !== index);
    setEtudiant(newArr);
  };

  const handleAddItem = () => {
    const newPerson = {
      name: newName,
      lastName: newLastName,
      age: +newAge,
    };
    setEtudiant([...etudiant, newPerson]);
    setNewName('');
    setNewLastName('');
    setNewAge('');
  };

  return (
    <div className='container'>
      <h2 className='text-center mt-5 mb-5'>La liste des personnes</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Âge</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {etudiant.map((person, idx) => (
            <tr key={idx}>
              <td>{person.name}</td>
              <td>{person.lastName}</td>
              <td>{person.age}</td>
              <td>
                <button
                  className='btn btn-warning'
                  onClick={() => handleDeleteItem(idx)}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='d-flex gap-3'>
        <input
          type="text"
          placeholder='nom'
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          type="text"
          placeholder='Prenom'
          value={newLastName}
          onChange={(e) => setNewLastName(e.target.value)}
        />
        <input
          type="number"
          placeholder='Age'
          value={newAge}
          onChange={(e) => setNewAge(e.target.value)}
        />
        <button className='btn btn-success' onClick={handleAddItem}>
          Ajouter
        </button>
      </div>
    </div>
  );
}

export default Ajouter;
