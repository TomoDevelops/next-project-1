"use client";

import React from "react";

import styles from "./button.module.css";

const buttonType = {
    transparent: "buttonBgTransparent",
    red: "buttonBgRed",
    outline: "buttonBgOutline",
};

function Button({ children, bgColor, height, width }) {
    return (
        <button
            className={`${styles.button} ${styles[buttonType[bgColor]]}`}
            style={{ minWidth: width, minHeight: height }}
        >
            {children}
        </button>
    );
}

export default Button;
