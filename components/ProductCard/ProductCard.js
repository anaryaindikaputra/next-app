/**
 * @componentDependencies
 */
// NextJS Components Dependencies
import Link from 'next/link';
// Material UI Components Dependencies
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function ProductCard({ product }) {
    return (
        <Link
            href={`../product/${product.sku}`}
            key={product.sku}
        >
            <Card sx={{ width: '30%' }}>
                <CardActionArea>
                    <CardMedia component="img" image={product.image.url} alt={product.name} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.name}
                        </Typography>
                        <hr />
                        <Typography variant="body2">
                            {product.stock_status.replace('_', ' ')}
                        </Typography>
                        <Typography variant="h6" fontWeight="700">
                            {`Rp${product.price_range.minimum_price.regular_price.value}`}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    )
}