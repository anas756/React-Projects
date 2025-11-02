import { useState } from 'react';
import './App.css';

function Steps() {
  const [thisStep, setThisStep] = useState(1);

  const messages = {
    1: "Apprendre React ⚛",
    2: "Réaliser un projet React 💼",
    3: "Passer l'exam React 🤑",
  };

  const handlePrecedent = () => {
    if (thisStep > 1) {
      setThisStep(thisStep - 1);
    }
  };

  const handleSuivant = () => {
    if (thisStep < 3) {
      setThisStep(thisStep + 1);
    }
  };

  return (
    <div className="body">
      <div className="numbers">
        <div className={thisStep >= 1 ? 'number active' : 'number'}>1</div>
        <div className={thisStep >= 2 ? 'number active' : 'number'}>2</div>
        <div className={thisStep >= 3 ? 'number active' : 'number'}>3</div>
      </div>

      <div className="message">
        Étape - {thisStep} : {messages[thisStep]}
      </div>

      <div className="navigation">
        <button 
          onClick={handlePrecedent}
          disabled={thisStep === 1}
        >
          Précédent
        </button>
        <button 
          onClick={handleSuivant}
          disabled={thisStep === 3}
        >
          Suivant
        </button>
      </div>
    </div>
  );
}

function App() {
  const [isVisible, setIsVisible] = useState(true);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div className="close-btn" onClick={handleToggle}>✖️</div>
      {isVisible && <Steps />}
    </div>
  );
}

export default App;
