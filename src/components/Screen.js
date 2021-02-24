import React from "react";
import { connect } from 'react-redux';

const Screen = ({ onScreen, pokemons }) => {
  if(onScreen.home === false) {
    const imgSrc = pokemons[onScreen.id - 1 ].isCatch ? require('../imgs/pokeball_screen.png') : onScreen.img;
    return(
      <>
        <h3 className='screen-name'>{onScreen.name}</h3>
        <img alt={onScreen.name} src={imgSrc} />
      </>
    );
  }
  return (
    <>
      <div className="screen-logo">GAME BOY</div>
      <div className="screen-logo-shadow">GAME BOY</div>
      <div className="nintendo-logo-screen">Nintendo&reg;</div>
    </>
  )
};

const mapStateToProps = ({ onScreen, pokemons }) => {
  return {
    onScreen,
    pokemons
  };
};

export default connect(mapStateToProps)(Screen);
