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
import { Container, Skeleton, Typography } from '@mui/material';
// Local Components Dependencies
import { ProductCategories, ProductDescription, ProductHeader, ProductImage, SubscriptionForm } from '@/components';

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
    // if (loading) return 'Loading...';
    if (loading) return (
        <div>
            <main>
                <Container maxWidth="xl">
                    <section className={styles.product}>
                        <Skeleton variant="rectangular" width={240} height={300} />
                        <div className="product-txt">
                            <section className="product-header">
                                <Skeleton variant="text" component={Typography} width={500} height={30} />
                                <Skeleton variant="rectangular" width={400} height={30} />
                                <Skeleton variant="text" component={Typography} width={300} height={38} />
                            </section>
                            <hr />
                            <section className="description">
                                <header>
                                    <h4>Description</h4>
                                </header>
                                <hr />
                                <Skeleton variant="text" width={960} height={144} />
                            </section>
                            <hr />
                            <section className="subscriptions">
                                <header>
                                    <h4>
                                        Subscribe to Our Newsletter to Get The Latest Product
                                        Information
                                    </h4>
                                </header>
                                <hr />
                                <Skeleton variant="rectangular" width={400} height={56} />
                            </section>
                            <hr />
                        </div>
                    </section>
                </Container>
            </main>
        </div>
    )

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