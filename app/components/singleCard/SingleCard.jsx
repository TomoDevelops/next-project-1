import React from "react";
import Image from "next/image";

import styles from "./singleCard.module.css";

function SingleCard({ pokemon }) {
    const {
        id,
        name,
        description,
        image,
        types,
        abilities,
        egg_groups,
        stats,
    } = pokemon;

    const type_color = {
        ノーマル: "normal",
        ほのお: "fire",
        みず: "water",
        くさ: "grass",
        でんき: "electric",
        こおり: "ice",
        かくとう: "fighting",
        どく: "poison",
        じめん: "ground",
        ひこう: "flying",
        エスパー: "psychic",
        むし: "bug",
        いわ: "rock",
        ゴースト: "ghost",
        ドラゴン: "dragon",
        あく: "dark",
        はがね: "steel",
        フェアリー: "fairy",
    };
    return (
        <div className={styles.singleCardContainer}>
            <h3 className={styles.cardName}>{name}</h3>
            <div className={styles.singleCardInnerContainer}>
                <Image
                    src={image.front_default}
                    width={250}
                    height={250}
                    alt="Official image of Pokemon"
                />
                <div>{description}</div>
                <ul className={styles.type}>
                    {types.map((type) => (
                        <li
                            className={styles[type_color[type]]}
                            key={`${name}+${type}`}
                        >
                            {type}
                        </li>
                    ))}
                </ul>
                <ul>
                    {abilities.map((ability) => (
                        <li key={`${name}+${ability}`}>{ability}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SingleCard;
