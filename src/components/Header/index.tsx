import igniteLogo from '/ignite-logo.svg'
import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Ignite Logo" />
            <span>Ignite Feed</span>
        </header>
    )
}