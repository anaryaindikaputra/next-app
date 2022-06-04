/**
 * @stylingDependencies
 */
// Material UI Styling Dependencies
import { useStyles } from './styles';

/**
 * @componentsDependencies
 */
// Material UI Components Dependencies
import Typography from '@mui/material/Typography';
// Local Components Dependencies
import { ProductCategories } from '@/components'; 

export default function ProductHeader({ name, categories, price }) {
     // Initialize Material UI Styling
     const productStyles = useStyles();
    
    return (
        <section className="product-header">
            <Typography
                className={`${productStyles.productHeading} ${productStyles.productHeading4}`}
                variant="h4"
            >
                {name}
            </Typography>
            <ProductCategories categories={categories} />
            <Typography
                className={`${productStyles.productHeading} ${productStyles.productHeading3}`}
                variant="h3"
            >
                {`Rp${price}`}
            </Typography>
        </section>
    )
}