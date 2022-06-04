/**
 * @stylingDependencies
 */
// Local Styling Dependencies
import styles from '@/styles/Home.module.css';
import categoriesStyles from '@/styles/categories/Categories.module.css';

/**
 * @componentDependecies
 */
// NextJS Components Dependencies
import Head from 'next/head';
// Local Components Dependencies
import { CategoryCard } from '@/components';

/**
 * @utilityDependencies
 */
// Apollo Dependencies
import { useQuery, useLazyQuery } from '@apollo/client';

/**
 * @dataDependencies
 */
// Data Schema Dependencies
import { GET_CATEGORIES } from '@/schema/category-schema';

export default function Categories() {
    /**
     * @func Initialize useQuery
     * @param GET_CATEGORIES: data schema
     * @return queryObject: object
     * @returnDesc query: an object with field that represents the current status of the query's
     * execution (data, loading, etc)
     */
    const { loading, error, data } = useQuery(GET_CATEGORIES);
    /**
     * @func Initialize useLazyQuery
     * @param GET_CATEGORIES: data schema
     * @return queryArray: array
     * @returnDesc an array containing a query function that can be called at any time to execute
     * the query and an object with field that represents the current status of the query's execution
     * (data, loading, etc)
     */
    // const [getCategories, { loading, error, data }] = useLazyQuery(GET_CATEGORIES);
    // Track query status
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{`Error: ${error.message}`}</p>;

    console.log(data && data);

    return (
        <div className={styles.container}>
            <Head>
                <title>Categories</title>
            </Head>
            <main className={styles.main}>
                <header>
                    <h1>Categories</h1>
                </header>
                <hr />
                <section className={categoriesStyles.grid}>
                    {
                        data && data.categoryList.map((category, index) => (
                            <CategoryCard category={category} key={index} />
                        ))
                    }
                </section>
            </main>
        </div>
    )
}