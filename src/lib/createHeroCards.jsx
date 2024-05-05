import HeroCard from "../components/HeroCard";

const IMG_FANTASTIC = "portrait_fantastic";

export default function createHeroCards(heroes) {
  return heroes.map((hero) => (
    <HeroCard
      name={hero.name}
      key={hero.id}
      id={hero.id}
      thumbnail={`${hero.thumbnail.path}/${IMG_FANTASTIC}.${hero.thumbnail.extension}`}
    />
  ));
}
