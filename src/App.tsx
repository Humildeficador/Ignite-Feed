import { Header } from "./components/Header";
import { Sidebar } from "./components/SideMenu";
import styles from './app.module.scss'

export function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Sidebar />
      </div>
    </>
  )
}