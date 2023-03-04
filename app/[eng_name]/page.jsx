import Image from "next/image";
import React from "react";
import all_pokemon from "../../python/data.json";

function getPokemonData(eng_name) {
    const pokemonIndex = all_pokemon.findIndex(
        (pokemon) => pokemon["eng_name"] === eng_name
    );
    return all_pokemon[pokemonIndex];
}

function DetailPage({ params, searchParams }) {
    const { eng_name } = params;
    const capped = eng_name.charAt(0).toUpperCase() + eng_name.slice(1);
    const pokemonData = getPokemonData(capped);

    return (
        <div>
            <h1>
                {pokemonData.name} / {pokemonData.eng_name}
            </h1>
            <Image
                src={pokemonData.image.front_default}
                width={250}
                height={250}
            />
        </div>
    );
}

export default DetailPage;
