import styles from "./Layout.module.css"

function layout({children}) {
  return (
    <>
    <header className={styles.header}>
        <h1 >Crypto App</h1>
        <p>Ava Jadidi | React App</p>
    </header>
    {children}
    <footer className={styles.footer}>
        <p>Developed By Ava Jadidi </p>
    </footer>
        </>
  )
}

export default layout