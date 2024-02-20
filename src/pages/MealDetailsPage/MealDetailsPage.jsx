import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './MealDetailsPage.scss';
import CategoryList from '../../components/Category/CategoryList';
import MealSingle from '../../components/Meal/MealSingle';
import { startFetchSingleMeal } from '../../actions/mealsActions';
import Loader from '../../components/Loader/Loader';
import { MealContext } from '../../context/mealContext';

const MealDetailsPage = () => {
	const { id } = useParams();
	const { categories, dispatch, meal, categoryLoading, mealLoading } = useContext(MealContext);

	useEffect(() => {
		startFetchSingleMeal(dispatch, id);
	}, [id, dispatch]);

	let ingredientsArr = [];
	let measuresArr = [];
	let singleMeal = {};
	console.log(meal);

	if (meal && meal?.length > 0) {
		for (let props in meal[0]) {
			if (props.includes('strIngredient') && meal[0][props]) {
				ingredientsArr.push(meal[0][props]);
			}

			if (props.includes('strMeasure') && meal[0][props] && meal[0][props].length > 1) {
				measuresArr.push(meal[0][props]);
			}
		}

		singleMeal = {
			id: meal[0]?.idMeal,
			title: meal[0]?.strMeal,
			category: meal[0]?.strCategory,
			area: meal[0]?.strArea,
			thumbnail: meal[0]?.strMealThumb,
			instructions: meal[0]?.strInstructions,
			source: meal[0]?.strSource,
			tags: meal[0]?.strTags,
			youtube: meal[0]?.strYoutube,
			ingredients: ingredientsArr,
			measures: measuresArr,
		};

		console.log(singleMeal);
	}

	return (
		<main className='main-content bg-whitesmoke'>
			{mealLoading ? <Loader /> : <MealSingle meal={singleMeal} />}
			{categoryLoading ? <Loader /> : <CategoryList categories={categories} />}
		</main>
	);
};

export default MealDetailsPage;
