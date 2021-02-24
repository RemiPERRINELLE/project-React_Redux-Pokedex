import React from 'react';

const Rules = () => {
  return (
    <div className="rules">
      <h1>Ce projet a été réalisé en utilisant React et Redux ainsi que l'API "pokeapi.co".</h1>
      <img alt="Logo Pokemon" src={require('../imgs/pokemon_logo.png')} />
      <div className="commandes">
        <h3>Commandes : </h3>
        <p>Bouton Start : Lancer le jeu ou revenir à l'écran d'accueil</p> 
        <p>Boutons B et Select : Sélectionner un Pokémon au hasard</p>
        <p>Bouton A : Tenter de capturer le Pokémon</p>
      </div>
    </div>
  )
}

export default Rules;