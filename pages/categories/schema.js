import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
    {
        categoryList(filters:{}) {
            uid
            name
            product_count
        }
    }
`;

export const GET_PRODUCTS_BY_CATEGORY_UID = gql`
    query getProducts($categoryUid: String) {
        categoryList(filters: {
            category_uid: {
                eq: $categoryUid
            }
        }) {
            products {
                items {
                    sku
                    name
                    image {
                        url
                    }
                    price_range {
                        minimum_price {
                            regular_price {
                                value
                            }
                        }
                    }
                    stock_status
                }
            }
        }
    }
`;