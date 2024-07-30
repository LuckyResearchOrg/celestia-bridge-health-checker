import React, { FC } from 'react';
import styles from "./Input.module.scss";

interface IInput {
    inputName: string
    name: string
    value: string
    onChange: (e: any) => void
    error: string
    placeholder: string
}

const Input:FC<IInput> = ({ inputName, value, onChange, error, placeholder }) => {
    return (
        <div className={styles.wrapper}>
            {/*{error && <p className={styles.error}>{error}</p>}*/}
            <h2>{inputName}</h2>
            <input
                className={error ? `${styles.input} ${styles.input__error}` : styles.input}
                type="text"
                name={inputName.toLowerCase().replace(/ /g, '')}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;
