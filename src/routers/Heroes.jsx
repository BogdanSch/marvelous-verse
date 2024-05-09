import React from "react";
import { useSelector } from "react-redux";

import createHeroCards from "../lib/createHeroCards.jsx";

import Container from "../components/Container";
import SearchBar from "../components/SearchBar";
import Grid from "../components/Grid";
import Image from "../components/Image";

import searchIntroImage from "../assets/images/search-mark.jpg";

const Home = () => {
  const heroes = useSelector((state) => state.searchedHeroes.value);
  let cards = createHeroCards(heroes);

  return (
    <main className="main">
      <section className="heroes" id="heroes">
        <Container>
          <div className="text-center mb-4 w-75 mx-auto">
            <Image src={searchIntroImage} alt="Search Introduction Image" />
            <h2 className="mt-3">Search the Marvel heroes</h2>
            <p>
              Explore the vast universe of Marvel characters and find your
              favorites with our powerful search feature.
            </p>
          </div>
          <SearchBar />
          <Grid className="mt-5">
            {cards ? (
              cards
            ) : (
              <p>Sorry, there are no heroes found by this request!</p>
            )}
          </Grid>
        </Container>
      </section>
    </main>
  );
};

export default Home;
