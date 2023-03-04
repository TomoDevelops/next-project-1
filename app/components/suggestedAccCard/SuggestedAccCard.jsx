import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./suggestedAccCard.module.css";

function SuggestedAccCard({ name, eng_name, image }) {
    return (
        <Link href={`/${eng_name}`} className={styles.suggestedAccContainer}>
            <Image
                className={styles.suggestedAccImage}
                src={image.front_default}
                width={40}
                height={40}
                alt="Official image of Pokemon"
            />
            <div className={styles.suggestedAccName}>
                {name} / {eng_name}
            </div>
        </Link>
    );
}

export default SuggestedAccCard;
