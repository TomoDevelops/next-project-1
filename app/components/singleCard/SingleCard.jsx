import React from "react";
import Image from "next/image";
import Link from "next/link";

function SingleCard({ pokemon }) {
    const {
        id,
        name,
        eng_name,
        description,
        image,
        types,
        abilities,
        egg_groups,
        stats,
    } = pokemon;

    const typeColorConfig = {
        ノーマル: "bg-[#aea886]",
        ほのお: "bg-[#f45c19]",
        みず: "bg-[#4a96d6]",
        くさ: "bg-[#28b25c]",
        でんき: "bg-[#eaa317]",
        こおり: "bg-[#45a9c0]",
        かくとう: "bg-[#9a3d3e]",
        どく: "bg-[#8f5b98]",
        じめん: "bg-[#916d3c]",
        ひこう: "bg-[#7e9ecf]",
        エスパー: "bg-[#d56d8b]",
        むし: "bg-[#989001]",
        いわ: "bg-[#878052]",
        ゴースト: "bg-[#555fa4]",
        ドラゴン: "bg-[#454ba6]",
        あく: "bg-[#7a0049]",
        はがね: "bg-[#9b9b9b]",
        フェアリー: "bg-[#ffbbff]",
    };
    return (
        <Link
            href={`/${eng_name}`}
            className={`flex flex-col gap-2 items-start py-5 px-0 max-w-[692px] relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-px after:scale-y-50 after:bg-grayTransparent`}
        >
            <h3 className={`text-lg`}>
                {name} / {eng_name}
            </h3>
            <div
                className={`flex flex-col justify-center items-center gap-6 rounded-lg p-6 w-[336px] max-w-[336px] min-w-[336px] h-[600px] max-h-[600px] min-h-[600px] bg-grayTransparent`}
            >
                <Image
                    src={image.front_default}
                    width={250}
                    height={250}
                    alt="Official image of Pokemon"
                />
                <div>{description}</div>
                <ul className={`flex justify-center items-center gap-6`}>
                    {types.map((type) => (
                        <li
                            className={`flex justify-center items-center w-[110px] max-w-[110px] min-w-[110px] h-[30px] rounded-lg ${typeColorConfig[type]}`}
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
        </Link>
    );
}

export default SingleCard;
