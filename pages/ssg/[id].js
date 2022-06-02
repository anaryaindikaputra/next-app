import dynamic from 'next/dynamic';

const Details = dynamic(() => import('@/components/Details'));

export default function Meal({ data }) {
    const meal = data.meals[0];
    
    return <Details data={meal} />
}

export async function getStaticPaths() {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
    const data = await res.json();

    const paths = data.meals.map(meal => {
        return {
            params: {
                id: meal.idMeal.toString(),
            }
        }
    });

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps(params) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.params.id}`);
    const data = await res.json();

    return {
        props: { data }
    }
}