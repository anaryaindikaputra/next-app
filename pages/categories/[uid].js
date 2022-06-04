/**
 * @stylingDependencies
 */
// Local Styling Dependencies
import styles from '@/styles/Home.module.css';
import categoriesStyles from '@/styles/categories/Categories.module.css'

/**
 * @componentDependencies
 */
// NextJS Components Dependencies
import Head from 'next/head';
// Local Components Dependencies
import { ProductCard } from '@/components';

/**
 * @utilityDependencies
 */
// NextJS Utility Dependencies
import { useRouter } from 'next/router';
// GraphQL Dependencies
import { useQuery } from '@apollo/client';

/**
 * @dataDependencies
 */
// Data Schema Dependencies
import { GET_PRODUCTS_BY_CATEGORY_UID } from './schema';

export default function Category() {
    // Initialize query from url
    const { query } = useRouter();

    /**
     * @func Initialize useQuery
     * @param GET_PRODUCTS_BY_CATEGORY_UID: data schema
     * @return queryObject: object
     * @returnDesc query: an object with field that represents the current status of the query's
     * execution (data, loading, etc)
     */
    const { loading, data, error } = useQuery(GET_PRODUCTS_BY_CATEGORY_UID, {
        variables: {
            categoryUid: query.uid,
        }
    });
    // Track query status 
    if (loading) return 'Loading...';
    if (error) return `Error: ${error.message}`;

    const products = data.categoryList[0].products.items;

    return (
        <div className={styles.container}>
            <Head>
                <title>{query.name}</title>
            </Head>
            <main className={styles.main}>
                <header>
                    <h1>{query.name}</h1>
                </header>
                <section className={categoriesStyles.grid}>
                    {
                        products.map((product, index) => (
                            <ProductCard product={product} key={index} />
                        ))
                    }
                </section>
            </main>
        </div>
    )
}