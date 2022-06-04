/**
 * @stylingDependencies
 */
import styles from '@/styles/product/Product.module.css';

export default function ProductCategories({ categories }) {
    return (
        <div className={styles.productCategories}>
            {
                categories.map((category, index) => (
                    <div className={styles.productCategory} key={index}>
                        <span>{category.name}</span>
                    </div>
                ))
            }
        </div>
    )
}