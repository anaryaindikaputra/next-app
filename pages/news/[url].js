import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import articleStyles from "../../styles/Article.module.css";

export default function NewsDetails() {
    const { query } = useRouter();

    return (
        <div className={styles.container}>
            <Head>
                <title>{query.title}</title>
            </Head>
            <main className={styles.main}>
                <Image src="/images/covid-virus.jpg" alt="Covid-19 Virus" width="2000" height="1125" />
                <h1>{query.title}</h1>
                <hr/>
                <p>{query.content}</p>
                <div>
                    <p></p>
                </div>
                <div className="button-wrapper">
                    <button className={articleStyles.buttonPrimary}>Read Later</button>
                    <button className={articleStyles.buttonSecondary}>Find Similar Article</button>
                </div>
                <style jsx>
                    {`
                        .button-wrapper {
                            display: flex;
                            flex-direction: row;
                            column-gap: .5rem;
                        }
                    `}
                </style>
            </main>
        </div>
    )
}