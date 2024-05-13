import styles from './styles.module.scss'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className={styles.cover}
            />
            <div className={styles.profile}>
                <img src="https://github.com/humildeficador.png" />
                <strong>João Leandro</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">Edite seu perfil</a>
            </footer>
        </aside>
    )
}