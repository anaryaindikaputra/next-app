/**
 * @stylingDependencies
 */
// Local Styling Dependencies
import styles from '@/styles/product/Product.module.css';

/**
 * @componentDependencies
 */
// NextJS Components Dependencies
import Image from 'next/image';

export default function ProductImage({ url, name }) {
    return (
        <div className={styles.productImg}>
            <Image src={url} alt={name} width="240" height="300" />
        </div>
    )
}