import React from 'react';
import "../blocks/Main.css";
import "../blocks/card.css";

function Main(props) {
  return (
    <main className="main">
      {props.children[0]}
      <section className="card__section">
        <h3 className="card__heading">Today is {props.temp} °F / You may want to wear:</h3>
        {props.children[1]}
      </section>
    </main>
  )
}

export default Main;