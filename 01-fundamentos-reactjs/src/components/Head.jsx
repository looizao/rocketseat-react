import styles from './Head.module.css';

import igniteLogo from '../assets/ignite-logo.svg';

export function Head() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do Ignite" />
        </header>
    )
}