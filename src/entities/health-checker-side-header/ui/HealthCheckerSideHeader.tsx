import React, {FC} from 'react';
import styles from "./HealthCheckerSideHeader.module.scss"
import {string} from "prop-types";

interface IHealthCheckerSideHeader {
    headerText: string
}

const HealthCheckerSideHeader:FC<IHealthCheckerSideHeader> = ({headerText}) => {
    return (
        <div className={styles.wrapper}>
            <h1>{headerText}</h1>
        </div>
    );
};

export default HealthCheckerSideHeader;