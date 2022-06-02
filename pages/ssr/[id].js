// Define dynamic imports dependency
import dynamic from 'next/dynamic';

// Define which components to be imported
// const Details = dynamic(() => import('@/components/Details'));
const Details = dynamic(() => import('@/components/Details'), {
    loading: () => {
        console.log("Dynamic Component With Custom Loading: ", "Loading");
        return <p>...</p>;
    }
});

export default function Meal({ data }) {
    const meal = data.meals[0];
    
    // Calling the imported component
    return <Details data={meal} />
}

export async function getServerSideProps(params) {
    // Fetch data from external API
    console.log("Fetching Data");
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.params.id}`);
    const data = await res.json();
    console.log("Data Fetched");
    
    // Pass data to the page via props
    return { props: { data } }
}