import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';

export default function Csr() {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        console.log("Fetching Data");
        setLoading(true);
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
            .then(res => res.json())
            .then(data => {
                setData(data.meals);
                setLoading(false);
        });
        console.log("Data Fetched");      
    }, [])
    
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No data</p>
    
    console.log("Rendering Page");

    return (
        <div className={styles.container}>
            <Head>
                <title>CSR</title>
                <meta name="description" content="This page is using client side rendering" />
            </Head>
            <main className={styles.main}>
                <header>
                    <h1>Client Side Rendering (CSR)</h1>
                    <p className={styles.description}>
                        This page is example of client side rendering.
                    </p>
                </header>
                <section className={styles.grid}>
                    {
                        data.map(meal => (
                            <div className={styles.card} key={meal.idMeal}>
                                <Image
                                    src={meal.strMealThumb}
                                    alt={meal.strMeal}
                                    width="250"
                                    height="250"
                                />
                                <h4>{meal.strMeal}</h4>
                            </div>
                        ))
                    }
                </section>
            </main>
        </div>
    )
}