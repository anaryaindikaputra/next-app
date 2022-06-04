/**
 * @componentDependencies
 */
// NextJS Components Dependencies
import Link from 'next/link';
// Material Ui Componentes Dependencies
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';

export default function CategoryCard({ category }) {
    return (
        <Link
            href={{
                pathname: `categories/${category.uid}`,
                query: {
                    uid: category.uid.toString(),
                    name: category.name.toString(),
                },
            }}
            key={category.uid}
        >
            <Card sx={{ width: '30%' }}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {category.name}
                        </Typography>
                        <hr />
                        <Typography variant="body2" color="text.secondary">
                            {`${category.product_count} Products`}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    )
}