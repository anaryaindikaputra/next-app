import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import covid from '../public/images/covid.jpg';
import { news } from "../data.js";

export default function News({ imageSrc = covid }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>News</title>
            </Head>
            <main className={styles.main}>
                <header>
                    <h1>News</h1>
                    <p className={styles.description}>
                        Let's read some news!
                    </p>
                </header>
                <div className={styles.grid}>
                    {
                        news && news.map(item => (
                            <Link
                                key={item.id}
                                href={{
                                    pathname: `/news/${item.url}`,
                                    query: {
                                        title: item.title,
                                        content: item.content,
                                        image: item.image
                                    }
                                }}
                            >
                                <a className={styles.card}>
                                    <Image src={imageSrc} alt="Covid-19" />
                                    <h2>{item.title}</h2>
                                </a>
                            </Link>
                        ))
                    }
                </div>                
            </main>
        </div>
    )
}
