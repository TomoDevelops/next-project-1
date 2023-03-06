import React from "react";
import Image from "next/image";
import all_pokemon from "../../../python/data.json";
import Button from "@/app/components/button/Button";

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
      className={`flex min-h-screen max-w-[1776px] flex-col gap-5 py-8 px-6`}
    >
      <div className={`flex max-w-[624px] flex-col`}>
        <div className={`flex items-start justify-start gap-5`}>
          <Image
            src={pokemonData.image.front_default}
            className={`rounded-full bg-white p-2`}
            width={120}
            height={120}
          />
          <div className={`flex flex-col gap-3`}>
            <div>
              <h1 className={`text-3xl`}>{pokemonData.name}</h1>
              <h2 className={`text-lg`}>{pokemonData.eng_name}</h2>
            </div>
            <Button height={36} width={208} bgColor={"red"}>
              Follow
            </Button>
          </div>
        </div>
        <div className={`mt-5 flex gap-4`}>
          <p>3 Following</p>
          <p>10M Followers</p>
          <p>10B Likes</p>
        </div>
        <p className={`mt-2 whitespace-pre-line`}>{pokemonData.description}</p>
      </div>
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod magni,
        unde, enim distinctio animi at recusandae omnis, doloribus quisquam
        asperiores nisi. Explicabo numquam ex incidunt recusandae id fugit,
        ducimus neque consequatur in, minima porro commodi quis totam nihil
        voluptatem assumenda ipsum delectus inventore sunt est repudiandae
        error. Alias, aspernatur beatae similique, inventore neque odit ut ipsum
        consequatur, ducimus enim fugit corporis corrupti ipsa sint obcaecati
        illum aperiam molestias rem aliquam excepturi necessitatibus? Labore
        voluptates fuga, placeat error dignissimos molestiae dolorem et. Impedit
        odio quisquam, in accusamus temporibus quidem beatae error et eius
        repellat similique perspiciatis sapiente, maxime repudiandae quos nulla.
      </div>
    </div>
  );
}

export default DetailPage;
