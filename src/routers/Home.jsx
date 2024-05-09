import React from "react";
// import { useState } from "react";
import { useSelector } from "react-redux";

import createHeroCards from "../lib/createHeroCards.jsx";

import Heroes from "./Heroes.jsx";
import Container from "../components/Container";
import Image from "../components/Image";

import introImage from "../assets/images/spider-man-reading.avif";

const Home = () => {
  const heroes = useSelector((state) => state.searchedHeroes.value);
  let cards = createHeroCards(heroes);

  return (
    <main className="main">
      <section className="about">
        <Container>
          <div className="my-5 text-center w-75 mx-auto">
            <Image src={introImage} alt="Spider Man Reading Intro Image" />
            <h1 className="mt-3">Welcome to Marvelous Verse</h1>
            <p>
              Marvelous Verse is your ultimate destination for exploring the
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
      <Heroes />
    </main>
  );
};

export default Home;
