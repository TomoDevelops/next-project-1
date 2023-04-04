import React from "react";
import Image from "next/image";
import all_pokemon from "../../../python/data.json";
import Button from "@/app/components/button/Button";
import VideoContainer from "@/app/components/videoContainer/VideoContainer";

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
    <div
      className={`flex min-h-screen max-w-[1776px] flex-auto flex-col gap-5 overflow-x-hidden py-8 px-6`}
    >
      <div className={`flex max-w-[624px] flex-col`}>
        <div className={`flex items-start justify-start gap-5`}>
          <Image
            src={pokemonData.image.front_default}
            alt="pokemon official image"
            className={`rounded-full bg-white p-2`}
            width={120}
            height={120}
          />
          <div className={`flex flex-col gap-3`}>
            <div>
              <h1 className={`text-3xl`}>{pokemonData.name}</h1>
              <h2 className={`text-lg`}>{pokemonData.eng_name}</h2>
            </div>
            <Button
              className={`tracking-wide`}
              height={36}
              width={208}
              bgColor={"red"}
            >
              Follow
            </Button>
          </div>
        </div>
        <div className={`mt-5 flex gap-4`}>
          <p>HP: {pokemonData.stats["HP"]}</p>
          <p>攻撃: {pokemonData.stats["こうげき"]}</p>
          <p>防御: {pokemonData.stats["ぼうぎょ"]}</p>
          <p>特攻: {pokemonData.stats["とくこう"]}</p>
          <p>特防: {pokemonData.stats["とくぼう"]}</p>
          <p>素早: {pokemonData.stats["すばやさ"]}</p>
        </div>
        <p className={`mt-3 whitespace-pre-line`}>{pokemonData.description}</p>
      </div>
      <div className={`w-full`}>
        <VideoContainer pokemon={pokemonData.name} />
      </div>
    </div>
  );
}

export default DetailPage;
