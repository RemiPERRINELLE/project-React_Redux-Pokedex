import React from 'react';

const Rules = () => {
  return (
    <div className="rules">
      <h1>Ce projet a été réalisé en utilisant React et Redux ainsi que l'API "pokeapi.co".</h1>
      <img alt="Logo Pokemon" src={require('../imgs/pokemon_logo.png')} />
      <div className="commandes">
        <h3>Commandes : </h3>
        <p><span className="bold">Bouton Start : </span>Lancer le jeu ou revenir à l'écran d'accueil</p> 
        <p><span className="bold">Boutons B et Select : </span>Sélectionner un Pokémon au hasard</p>
        <p><span className="bold">Liste : </span>Sélectionner directement un Pokémon</p>
        <p><span className="bold">Bouton A : </span>Tenter de capturer le Pokémon</p>
      </div>
    </div>
  )
}

export default Rules;