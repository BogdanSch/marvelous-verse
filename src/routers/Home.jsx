import React from "react";
import { useState } from "react";

import Container from "../components/Container";
import SearchBar from "../components/SearchBar";
import Grid from "../components/Grid";
import HeroCard from "../components/HeroCard";
import Image from "../components/Image";

import introImage from "../assets/images/spider-man-reading.avif";
const IMG_FANTASTIC = "portrait_fantastic";

const Home = () => {
  const [heroes, setHeroes] = useState([]);

  let cards;
  if (heroes) {
    cards = heroes.map((hero) => (
      <HeroCard
        name={hero.name}
        key={hero.id}
        id={hero.id}
        thumbnail={`${hero.thumbnail.path}/${IMG_FANTASTIC}.${hero.thumbnail.extension}`}
      />
    ));
  }

  return (
    <main className="main">
      <section className="about">
        <Container>
          <div className="my-5 text-center w-75 mx-auto">
            <Image src={introImage} alt="Spider Man Reading Intro Image" />
            <h2 className="mt-3">Marvel Heroes</h2>
            <p>
              Marvel Heroes is your ultimate destination for exploring the
              fascinating world of Marvel Comics characters. Whether you're a
              die-hard fan or just getting started, our app has something for
              everyone.
            </p>
            <a className="btn btn-outline-info px-5 py-3" href="#heroes">
              Look up more
            </a>
          </div>
        </Container>
      </section>
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
