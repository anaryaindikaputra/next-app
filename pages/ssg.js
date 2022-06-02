import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
    // Fetch data from external API
    console.log("Fetching Data");
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
    const data = await res.json();
    console.log("Data Fetched");
    
    // By returning { props: { data } }, the Ssg component
    // will receive `data` as a prop at build time
    return { props: { data } }
}

// Data will be populated at build time by this function.
export default function Ssg({ data }) {
    console.log("Rendering Page");

    return (
        <div className={styles.container}>
            <Head>
                <title>SSG</title>
                <meta name="description" content="This page is using static site generation" />
            </Head>
            <main className={styles.main}>
                <header>
                    <h1>Static Site Generation (SSG)</h1>
                    <p className={styles.description}>
                        This page is example of static site rendering.
                    </p>
                </header>
                <section className={styles.grid}>
                    {
                            data.meals.map(meal => (
                                <Link
                                    key={meal.idMeal}
                                    href={{
                                        pathname: `/ssg/${meal.idMeal}`,
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