import React, { useState } from 'react';  
import './Form.css'

const Form = () => {
  const [name, setName] = useState('');  // Mémoire pour le nom
  const [phone, setPhone] = useState('');  // Mémoire pour le téléphone

  const handleReset = () => {
    setName('');
    setPhone('');
  };




    
    const handleSubmit = async (e) => {
      e.preventDefault(); // Empêche le rechargement de la page
  
      try {
        // Envoi des données au backend
        const response = await fetch('http://localhost:5000/api/form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, phone }),
        });
  
        if (response.ok) {
          alert('Formulaire envoyé avec succès ✅');
          setName(''); // Réinitialise le champ nom
          setPhone(''); // Réinitialise le champ téléphone
        } else {
          alert("Erreur lors de l'envoi ❌");
        }
      } catch (error) {
        console.error('Erreur:', error);
        alert('Problème de connexion au serveur 🔌');
      }
    };









  
  return (
    <div className='container'>
        <h2> Form </h2>
        <hr/>
        <form onSubmit={handleSubmit}>
        <p>please write your name bellow</p>
        <input
          type="text"
          placeholder="Write your name here"
          value={name}  // Affiche la valeur actuelle
          onChange={(e) => setName(e.target.value)}  // Met à jour quand on tape
          required
          />
        <p>please write your phone number bellow</p>

        <input
          type="number"
          placeholder="Write your phone number here"
          value={phone}  // Affiche la valeur actuelle
          onChange={(e) => setPhone(e.target.value)}  // Met à jour quand on tape
          required
        />
        <button type="button" onClick={handleReset}>reset</button>
        <button>submit</button>
        </form>
          
        </div>
        )
}

export default Form