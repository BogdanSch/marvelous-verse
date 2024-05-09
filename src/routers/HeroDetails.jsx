import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setSearchedHero } from "../app/features/searchedHeroSlice.js";

import Container from "../components/Container.jsx";
import { fetchHero } from "../lib/utils.js";

export default function HeroDetails() {
  const dispatch = useDispatch();

  const hero = useSelector((state) => state.searchedHero.value);
  let { characterId } = useParams(0);

  useEffect(() => {
    fetchHero(characterId)
      .then((data) => dispatch(setSearchedHero(data[0])))
      .catch((err) => console.error(err));
  }, []);

  if (hero.length < 1) return;

  return (
    <main className="main">
      <section className="hero mt-5 mb-5">
        <Container>
          <div className="d-flex flex-row flex-wrap gap-5 align-items-start">
            <img
              src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
              alt="hero full size"
              className="hero__image"
            />
            <div className="hero__details">
              <div className="hero__details-name">
                <h4>Name: </h4>
                <p>{hero.name}</p>
              </div>
              {hero.description ? (
                <div className="hero__details-description">
                  <h4>Description: </h4>
                  <p>{hero.description}</p>
                </div>
              ) : null}
              {hero.comics.items.length > 0 ? (
                <div className="hero__details-comics">
                  <h4>Comics: </h4>
                  <ul>
                    {hero.comics.items.map((title) => (
                      <li key={Math.random() * 1000}>{title.name}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {hero.series.items.length > 0 ? (
                <div className="hero__details-series">
                  <h4>Series: </h4>
                  <ul>
                    {hero.series.items.map((title) => (
                      <li key={Math.random() * 1000}>{title.name}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
