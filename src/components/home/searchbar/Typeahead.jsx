import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import EstablishmentContext from '../../contexts/EstablishmentsContext';
import { useClickOutside } from './useClickOutside';

const Typeahead = () => {
	const context = useContext(EstablishmentContext);
	const [state, , ,] = context;
	const [suggestions, setSuggestions] = useState([]);
	const [text, setText] = useState('');
	const [isOpen, setIsOpen] = useState(false);

	const history = useHistory();

	const onTextChangeHandler = e => {
		const searchValue = e.target.value.toLowerCase();
		let suggestionsValue = [];
		setIsOpen(true);
		suggestionsValue = state.establishments.filter(hotel => {
			const lowerCaseName = hotel.name.toLowerCase();

			if (lowerCaseName.includes(searchValue)) {
				return true;
			}
			return false;
		});
		setSuggestions(suggestionsValue);
		setText(searchValue);
	};

	const suggestionSelected = value => {
		setText(value);
		setSuggestions([]);
		history.push('/specific/' + value.id);
	};

	const renderSuggestions = () => {
		if (suggestions.length === 0) {
			return null;
		} else {
			return (
				<ul className="searchBar__options">
					{suggestions.map(hotel => (
						<li
							className="searchBar__options-item"
							onClick={() => suggestionSelected(hotel)}
							key={hotel.id}
						>
							{hotel.name}
						</li>
					))}
				</ul>
			);
		}
	};

	let domNode = useClickOutside(() => {
		setIsOpen(false);
	});

	return (
		<div className="searchBar__input-container" ref={domNode}>
			<input
				className="searchBar__input"
				type="text"
				value={text}
				onChange={onTextChangeHandler}
			/>
			{isOpen && <div>{renderSuggestions()}</div>}
		</div>
	);
};

export default Typeahead;
