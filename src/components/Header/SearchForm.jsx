import { useContext, useState } from 'react';
import './Header.scss';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { startFetchMealsBySearch } from '../../actions/mealsActions';
import { MealContext } from '../../context/mealContext';

const SearchForm = () => {
	const navigate = useNavigate();
	const [searchTerm, setSearchTerm] = useState('');
	const { dispatch } = useContext(MealContext);

	const handleSearchTerm = (e) => {
		e.preventDefault();
		if (e.target.value.replace(/[^\w\s]/gi, '').length !== 0) {
			setSearchTerm(e.target.value);
		}
	};

	const handleSearchResult = (e) => {
		e.preventDefault();
		navigate('/');
		startFetchMealsBySearch(dispatch, searchTerm);
	};

	return (
		<form className='search-form flex align-center' onSubmit={(e) => handleSearchResult(e)}>
			<input
				type='text'
				className='form-control-input text-dark-gray fs-15'
				placeholder='Search recipes here ...'
				onChange={(e) => handleSearchTerm(e)}
			/>
			<button type='submit' className='form-submit-btn text-white text-uppercase fs-14'>
				<BsSearch className='btn-icon' size={20} />
			</button>
		</form>
	);
};

export default SearchForm;
