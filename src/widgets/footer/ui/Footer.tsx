import React from 'react';
import styles from "./Footer.module.scss"
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>COPYRIGHT © 2024 DTEAM.TECH</p>
            <div className={styles.links__container}>
                <div className={styles.links}>
                    <h2>Celestia links</h2>
                    <ul>
                        <li>
                            <Link target="__blank" href={`https://celestia.org/`}>Website</Link>
                        </li>
                        <li>
                            <Link target="__blank" href={`https://twitter.com/CelestiaOrg`}>X / Twitter</Link>
                        </li>
                        <li>
                            <Link target="__blank" href={`https://discord.gg/YrXs6nV4Ra`}>Discord</Link>
                        </li>
                        <li>
                            <Link target="__blank" href={`https://github.com/celestiaorg`}>Github</Link>
                        </li>
                        <li>
                            <Link target="__blank" href={`https://explorer.mainnet.dteam.tech/celestia`}>Explorer</Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.links}>
                    <h2>TENDERMINT CHAIN SERVICES</h2>
                    <ul>
                        <li>
                            <Link target="__blank" href={`https://dteam.tech/services/mainnet/installation-guide`}>installation guide</Link>
                        </li>
                        <li>
                            <Link target="__blank" href={`https://dteam.tech/services/mainnet/useful-commands`}>useful commands</Link>
                        </li>
                        <li>
                            <Link target="__blank" href={`https://dteam.tech/services/mainnet/snapshot`}>snapshot</Link>
                        </li>
                        <li>
                            <Link target="__blank" href={`https://dteam.tech/services/mainnet/state-sync`}>state sync</Link>
                        </li>
                        <li>
                            <Link target="__blank" href={`https://dteam.tech/services/mainnet/endpoints`}>endpoints</Link>
                        </li>
                        <li>
                            <Link target="__blank" href={`https://dteam.tech/services/mainnet/addrbook`}>addrbook</Link>
                        </li>
                        <li>
                            <Link target="__blank" href={`https://dteam.tech/services/mainnet/genesis`}>genesis</Link>
                        </li>
                        <li>
                            <Link target="__blank" href={`https://dteam.tech/services/mainnet/ibc`}>IBC</Link>
                        </li>
                        <li>
                            <Link target="__blank" href={`https://dteam.tech/services/mainnet/peers`}>peers</Link>
                        </li>
                        <li>
                            <Link target="__blank" href={`https://dteam.tech/services/mainnet/seeds`}>seeds</Link>
                        </li>
                    </ul>
                </div>

                {/*<div className={styles.links}>*/}
                {/*    <h2>OTHER CHAIN SERVICES</h2>*/}
                {/*    <ul>*/}
                {/*        <li><ComingSoon>COMING SOON</ComingSoon></li>*/}
                {/*    </ul>*/}
                {/*</div>*/}

                <div className={styles.links}>
                    <h2>WEBSITE NAV</h2>
                    <ul>
                        <li>
                            <Link target="__blank" href="https://dteam.tech/">ABOUT US</Link>
                        </li>
                        <li>
                            <Link target="__blank" href="https://dteam.tech/features">FEATURES</Link>
                        </li>
                        <li>
                            <Link target="__blank" href="https://dteam.tech/networks/mainnet">NETWORKS</Link>
                        </li>
                        <li>
                            <Link target="__blank" href="https://dteam.tech/services/mainnet">SERVICES</Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.links}>
                    <h2>OUR COMMUNITY</h2>
                    <ul>
                        <li><a target="__blank" href="https://twitter.com/dteamtech">X / TWITTER</a></li>
                        <li><a target="__blank" href="https://discord.gg/aFfJH3zW4M">DISCORD</a></li>
                        <li><a target="__blank" href="https://github.com/DTEAMTECH">GITHUB</a></li>
                    </ul>
                </div>

                <div className={styles.links}>
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li><a target="__blank" href="https://twitter.com/dteamtech">X / TWITTER</a></li>
                        <li><a target="__blank" href="mailto:contact@dteam.tech">EMAIL</a></li>
                    </ul>
                </div>

            </div>
        </footer>
    );
};

export default Footer;