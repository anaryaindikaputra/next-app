import Image from 'next/image';
import styles from '@/styles/meal.module.css';

export default function Details({ data: meal }) {
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
        if (!meal[`strIngredient${i}`]) break;
        ingredients.push(meal[`strIngredient${i}`]);
    }

    let measures = [];
    for (let i = 1; i <=20; i++) {
        if (!meal[`strMeasure${i}`]) break;
        measures.push(meal[`strMeasure${i}`]);
    }
    
    return (
        <div className={styles.meal}>
            <div className={styles.header}>
                <Image src={meal.strMealThumb} width="1200" height="1200" />
                <h1>{meal.strMeal}</h1>
                <h2 className={styles.headerSubtitle}>
                    {`${meal.strArea} ${meal.strCategory}`}
                </h2>
            </div>
            <div className={styles.mealInformations}>
                <div className={styles.mealIngredients}>
                    <h6>Ingredients</h6>
                    <hr/>
                    {
                        ingredients? (
                            <ul>
                                {
                                    ingredients.map((ingredient, index) => (
                                        <li key={index}>{`${measures[index]} ${ingredient}`}</li>
                                    ))
                                }
                            </ul>
                        ) : (<p>Loading ...</p>)
                    }
                </div>
                <div className={styles.meal__instructions}>
                    <h6>Instructions</h6>
                    <hr/>
                    <p>{meal.strInstructions}</p>
                </div>
            </div>
        </div>
    )
}