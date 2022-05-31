import Head from 'next/head';
import styles from '../styles/Home.module.css'

export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>About</title>
                <meta name="description" content="Page where you can seek information about the company" />
            </Head>
            <main className={styles.main}>
                <header>
                    <h1>About</h1>
                    <p className={styles.description}>
                        Get to know us
                    </p>
                </header>
            </main>
        </div>
    )
}