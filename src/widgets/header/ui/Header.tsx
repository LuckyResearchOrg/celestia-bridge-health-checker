import React from 'react';
import styles from "./Header.module.scss"

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>Celestia Bridge Status Checker</h1>
            <p>{"Welcome to LuckyResearch's Celestia Bridge Status Checker – a simple and efficient tool for monitoring the status of your Celestia bridge node. Enter your IP, port, and authentication token to get started!"}
            </p>
        </header>
    );
};

export default Header;
