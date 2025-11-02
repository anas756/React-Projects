import { useState } from 'react'
import casque from './assets/casque.jpeg';
import chargeur from './assets/chargeur.jpeg';
import hautParleur from './assets/haut-parleur.jpeg';
import laptop from './assets/laptop.jpeg';
import smartWatch from './assets/smartwatch.jpeg';
import souris from './assets/souris.jpeg';

function ProductManager() {

  const produitsInitiaux = [
    { id: 1, nom: "casque", prix: 150, image: casque },
    { id: 2, nom: "chargeur", prix: 50, image: chargeur },
    { id: 3, nom: "hautParleur", prix: 350, image: hautParleur },
    { id: 4, nom: "laptop", prix: 5500, image: laptop },
    { id: 5, nom: "smartWatch", prix: 2000, image: smartWatch },
    { id: 6, nom: "souris", prix: 160, image: souris },
  ];

  const [produits, setProduits] = useState(produitsInitiaux);
  const [nom, setNom] = useState("");
  const [prix, setPrix] = useState("");
  const [image, setImage] = useState("");
  const [fileImage, setFileImage] = useState(null);

  const handleDeleteProduit = (id) => {
    setProduits(produits.filter((p) => p.id !== id));
  };

  const handleAddProduit = (e) => {
    e.preventDefault();

    const nouveauProduit = {
      id: produits.length + 1,
      nom: nom,
      prix: prix,
      image: fileImage || image,
    };

    setProduits([...produits, nouveauProduit]);
    setNom('');
    setPrix('');
    setImage('');
    setFileImage(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFileImage(url);
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Gestion des Produits</h2>

      <div className="row">
        {produits.map((p) => (
          <div className="col-md-4 mb-4" key={p.id}>
            <div className="card shadow-sm">
              <img src={p.image} alt={p.nom} className="card-img-top" />
              <div className="card-body text-center">
                <h5 className="card-title text-capitalize">{p.nom}</h5>
                <p className="card-text fw-bold">{p.prix} DH</p>
                <button
                  onClick={() => handleDeleteProduit(p.id)}
                  className="btn btn-danger btn-sm"
                >
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card p-4 mt-5 shadow-sm">
        <h4 className="mb-3 text-center">Ajouter un produit</h4>
        <form onSubmit={handleAddProduit} className="row g-3 justify-content-center">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              required
            />
          </div>
          <div className="col-md-3">
            <input
              type="number"
              className="form-control"
              placeholder="Prix"
              value={prix}
              onChange={(e) => setPrix(e.target.value)}
              required
            />
          </div>
          <div className="col-md-3">
            <input
              type="file"
              className="form-control"
              onChange={handleFileChange}
            />
          </div>
          <div className="col-md-2 text-center">
            <button type="submit" className="btn btn-primary w-100">
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductManager;
