import React from "react";
import { useState } from "react";

import Container from "../components/Container.jsx";
import SearchBar from "../components/SearchBar.jsx";
import Grid from "../components/Grid";
import Card from "../components/Card";

const IMG_FANTASTIC = "portrait_fantastic";

const Home = () => {
  const [heroes, setHeroes] = useState([]);
  let cards;
  if (heroes) {
    cards = heroes.map((hero) => (
      <Card
        name={hero.name}
        key={hero.id}
        id={hero.id}
        thumbnail={`${hero.thumbnail.path}/${IMG_FANTASTIC}.${hero.thumbnail.extension}`}
      />
    ));
  }

  return (
    <Container>
      <div className="title">
        <h2>Marvel Heroes</h2>
        <SearchBar setter={setHeroes} />
        <h2>Results</h2>
        <Grid>{cards ? cards : null}</Grid>
      </div>
    </Container>
  );
};

export default Home;
