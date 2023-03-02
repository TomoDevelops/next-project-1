"use client";

import React, { useState } from "react";

import all_pokemon from "../../../python/data.json";
import SuggestedAccCard from "../suggestedAccCard/SuggestedAccCard";
import styles from "./suggestedAccContainer.module.css";

const pokemonSortedByAtk = all_pokemon.sort(
    (a, b) => b.stats["こうげき"] - a.stats["こうげき"]
);

function SuggestedAccContainer() {
    const [numToShow, setNumToShow] = useState(5);

    const handleShowMore = () => {
        setNumToShow((prevNumToShow) => prevNumToShow + 20);
    };

    const handleShowLess = () => {
        setNumToShow((prevNumToShow) => prevNumToShow - 20);
    };
    return (
        <div className={styles.suggestedAccContainer}>
            <p className={styles.suggestedTitle}>Top Attack</p>
            {pokemonSortedByAtk.slice(0, numToShow).map((pokemon) => (
                <SuggestedAccCard
                    key={pokemon.id}
                    name={pokemon.name}
                    image={pokemon.image}
                />
            ))}
            {numToShow < 25 ? (
                <button
                    className={styles.showNumButton}
                    onClick={handleShowMore}
                >
                    Show More
                </button>
            ) : (
                <button
                    className={styles.showNumButton}
                    onClick={handleShowLess}
                >
                    Show Less
                </button>
            )}
        </div>
    );
}

export default SuggestedAccContainer;
