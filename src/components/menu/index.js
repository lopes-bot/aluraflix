import React from 'react';

// import { Container } from './styles';

function Menu() {
  return(<nav className="Menu">
      <a href="/">
         <img src="img/aluraflix.png" alt="logo" className="logo"></img>
      </a>
      <a href="/" className="buttonLink">Novo vídeo</a>
  </nav>);
}

export default Menu;