import { Link } from 'react-router-dom';
import './Meal.scss';

const MealList = ({ meals }) => {
	return (
		<div className='section-wrapper'>
			<div className='container'>
				<div className='sc-title'>meals</div>
				<section className='sc-meal grid'>
					{meals?.map((mealItem) => {
						const { idMeal, strArea, strCategory, strMeal, strMealThumb } = mealItem;

						return (
							<Link
								to={`/meal/${idMeal}`}
								className='meal-itm align-center justify-center'
								key={idMeal}>
								<div className='meal-itm-img'>
									<img src={strMealThumb} alt={strMeal} />
									<div className='meal-itm-cat bg-orange text-orange fw-6'>{strCategory}</div>
								</div>

								<div className='meal-itm-body'>
									<div className='meal-itm-body-info flex flex-column'>
										<div className='area fs-14 ls-1 fw-5'>{strArea}</div>
										<div className='meal fw-15 fw-7 op-09'>{strMeal}</div>
									</div>
								</div>
							</Link>
						);
					})}
				</section>
			</div>
		</div>
	);
};

export default MealList;
