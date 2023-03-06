import all_pokemon from "../../python/data.json";

import SingleCard from "@/app/components/singleCard/SingleCard";

export default function ForYou() {
  return (
    <div className="w-[692px]">
      {all_pokemon.map((pokemon) => (
        <SingleCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </div>
  );
}
