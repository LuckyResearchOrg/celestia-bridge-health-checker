import React, {FC} from 'react';
import styles from "./Button.module.scss";

interface IButton {
    onClick: () => void
    disabled: boolean
    loading: boolean
}

const Button:FC<IButton> = ({ onClick, disabled, loading }) => {
    return (
        <button
            className={`${styles.button} ${loading ? styles.loading : ''}`}
            onClick={onClick}
            disabled={disabled || loading}
        >
            {loading ? <div className={styles.spinner}></div> : 'CHECK'}
        </button>
    );
};

export default Button;