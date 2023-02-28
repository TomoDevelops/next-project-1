import { Montserrat } from "next/font/google";

import styles from "./page.module.css";
import all_pokemon from "../python/data.json";

import SingleCard from "@/app/components/singleCard/SingleCard";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function ForYou() {
    return (
        <div className={styles.mainInsideContainer}>
            {all_pokemon.map((pokemon) => (
                <SingleCard pokemon={pokemon} key={pokemon.id} />
            ))}
        </div>
    );
}
