import React from 'react';

export default function Header(props) {
  return(
    <header>
      <h1>Você está em:{props.title}</h1>
    </header>
  );
}