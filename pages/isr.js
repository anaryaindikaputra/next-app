import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
    // Fetch data from external API
    console.log("Fetching Data");
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
    const data = await res.json();
    console.log("Data Fetched");
    
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    return {
        props: { data, },
        revalidate: 10,
    }
}

export default function Isr({ data }) {
    console.log("Rendering Page");

    return (
        <div className={styles.container}>
            <Head>
                <title>ISR</title>
                <meta name="description" content="This page is using incremental static regeneration" />
            </Head>
            <main className={styles.main}>
                <header>
                    <h1>Incremental Static Regeneration (ISR)</h1>
                    <p className={styles.description}>
                        This page is example of incremental static regeneration.
                    </p>
                </header>
                <section className={styles.grid}>
                    {
                        data.meals.map(meal => (
                            <Link
                                key={meal.idMeal}
                                href={{
                                    pathname: `/isr/${meal.idMeal}`,
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
                            // <div className={styles.card} key={meal.idMeal}>
                            //     <Image
                            //         src={meal.strMealThumb}
                            //         alt={meal.strMeal}
                            //         width="250"
                            //         height="250"
                            //     />
                            //     <h4>{meal.strMeal}</h4>
                            // </div>
                        ))
                    }
                </section>
            </main>
        </div>
    )
}