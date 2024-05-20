import MealsGrid from '@/components/meals/meal-grid';
import classes from './page.module.css';
import Link from 'next/link';
import { getMeals } from '@/lib/meals';
import { Suspense } from 'react';

async function Meals() {
    const meals = await getMeals();
    return <MealsGrid meals={meals} />

}

export default async function MealsPage() {

    return <>
        <header className={classes.header}>
            <h1>
                Delicious meals, created <span className={classes.highlight}>by you</span>
            </h1>
            <p>Choose your recipe and cool it yourself. It is easy and fun.</p>
            <p className={classes.cta}>
                <Link href="/meals/share">
                    Share Your Favorite Recipe
                </Link>
            </p>
        </header>
        <main>
            <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
                <Meals />
            </Suspense>
        </main>
    </>
}