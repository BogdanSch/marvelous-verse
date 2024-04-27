import React from "react";
import { useParams } from "react-router-dom";

import Grid from "../components/Grid.jsx";

export default function HeroDetails() {
  let { characterId } = useParams(0);
  return <Grid>{characterId}</Grid>;
}
