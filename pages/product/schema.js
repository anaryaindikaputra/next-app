// Apollo Client Dependencies
import { gql } from '@apollo/client';

// Schema initialization
/**
 * @Schema The products query searches for products that match the criteria specified in the search and
 * filter attributes.
 */
export const GET_PRODUCT_BY_SKU = gql`
    query getProduct($productSku: String) {
        products(filter: {
            sku: {
                eq: $productSku
            }
        }) {
            items {
                name
                categories {
                    name
                }
                price_range {
                    minimum_price {
                        final_price {
                            value
                        }
                    }
                }
                image {
                    url
                }
                description {
                    html
                }
            }
        }
    }
`;