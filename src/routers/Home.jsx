import React from "react";
import { useState } from "react";

import Container from "../components/Container.jsx";
import SearchBar from "../components/SearchBar.jsx";
import Grid from "../components/Grid";

const Home = () => {
  const [heroes, setHeroes] = useState([]);
  return (
    <Container>
      <div className="title">
        <h2>Marvel Heroes</h2>
        <SearchBar setter={setHeroes} />
        <Grid>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </Grid>
      </div>
    </Container>
  );
};

export default Home;
