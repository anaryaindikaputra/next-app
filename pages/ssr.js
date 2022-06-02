import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

// This function gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    console.log("Fetching Data");
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
    const data = await res.json();
    console.log("Data Fetched");
    
    // Pass data to the page via props
    return { props: { data } }
}

export default function Ssr({ data }) {
    console.log("Rendering Page");

    return (
        <div className={styles.container}>
            <Head>
                <title>SSR</title>
                <meta name="description" content="This page is using server side rendering" />
            </Head>
            <main className={styles.main}>
                <header>
                    <h1>Server Side Rendering (SSR)</h1>
                    <p className={styles.description}>
                        This page is example of server side rendering.
                    </p>
                </header>
                <section className={styles.grid}>
                {
                        data.meals.map(meal => (
                            <Link
                                key={meal.idMeal}
                                href={{
                                    pathname: `/ssr/${meal.idMeal}`,
                                }}
                            >
                                <a className={styles.card} key={meal.idMeal}>
                                    <Image
                                        src={meal.strMealThumb}
                                        alt={meal.strMeal}
                                        width="250"
                                        height="250"
                                    />
                                    <h4>{meal.strMeal}</h4>
                                </a>
                            </Link>
                        ))
                    }
                </section>
            </main>
        </div>
    )
}