/**
 * @stylingDependencies
 */
// Local Styling Dependencies
import styles from '@/styles/product/Product.module.css';

/**
 * @componentsDependencies
 */
// NextJS Components Dependencies
import Head from 'next/head';
// Material UI Components Dependencies
import Container from '@mui/material/Container';
// Local Components Dependencies
import { ProductDescription, ProductHeader, ProductImage, SubscriptionForm } from '@/components';

/**
 * @utilityDependencies
 */
// NextJS Utility Dependencies
import { useRouter } from 'next/router';
// Apollo Dependencies
import { useQuery } from '@apollo/client';

/**
 * @dataDependencies
 */
// Schema Dependencies
import { GET_PRODUCT_BY_SKU } from '@/schema/product-schema';

export default function Product() {
    // Initialize query from url
    const { query } = useRouter();

    /**
     * @func Initialize useQuery
     * @type queryObject: object
     * @desc query: an object with field that represents the current status of the query's
     * execution (data, loading, etc)
     */
    const { loading, data, error } = useQuery(GET_PRODUCT_BY_SKU, {
        variables: {
            productSku: query.sku,
        }
    });
    // Track query status
    if (loading) return 'Loading...';
    if (error) return `Error: ${error.message}`;

    const product = data.products.items[0];

    return (
        <div>
            <Head>
                <title>{product.name}</title>
            </Head>
            <main>
                <Container maxWidth="xl">
                    <section className={styles.product}>
                        <ProductImage url={product.image.url} alt={product.name} />
                        <div className="product-txt">
                            <ProductHeader
                                name={product.name}
                                categories={product.categories}
                                price={product.price_range.minimum_price.final_price.value}
                            />
                            <hr />
                            <ProductDescription description={product.description} />
                            <hr />
                            <section className="subscriptions">
                                <header>
                                    <h4>
                                        Subscribe to Our Newsletter to Get The Latest Product
                                        Information
                                    </h4>
                                </header>
                                <hr />
                                <SubscriptionForm />
                            </section>
                            <hr />
                        </div>
                    </section>
                </Container>
            </main>
        </div>
    )
}