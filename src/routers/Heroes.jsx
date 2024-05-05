import React from "react";
import { useState } from "react";
import createHeroCards from "../lib/createHeroCards.jsx";

import Container from "../components/Container";
import SearchBar from "../components/SearchBar";
import Grid from "../components/Grid";
// import Image from "../components/Image";

const Home = () => {
  const [heroes, setHeroes] = useState([]);

  let cards = createHeroCards(heroes);

  return (
    <main className="main">
      <section className="heroes" id="heroes">
        <Container>
          <div className="text-center mb-4 w-75 mx-auto">
            <h2>Search the Marvel heroes</h2>
            <p>
              Explore the vast universe of Marvel characters and find your
              favorites with our powerful search feature.
            </p>
          </div>
          <SearchBar setter={setHeroes} />
          <Grid className="mt-5">{cards ? cards : null}</Grid>
        </Container>
      </section>
    </main>
  );
};

export default Home;
