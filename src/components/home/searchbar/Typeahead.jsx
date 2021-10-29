import { useState, useContext } from 'react'; 
import { useHistory } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'
import SuggestionsListComponent from './SuggestionsListComponent';
import EstablishmentContext from '../../contexts/EstablishmentsContext';



const Typeahead = () => {
	const context = useContext(EstablishmentContext);
	const [state, , ,] = context;
	const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [input, setInput] = useState("");

	const history = useHistory();

	const onChange = (e) => {
        const userInput = e.target.value;
    
        // Filter our suggestions that don't contain the user's input
        const unLinked = state.establishments.filter((hotel) =>
            hotel.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );
    
        setInput(userInput);
        setFilteredSuggestions(unLinked);
        setActiveSuggestionIndex(0);
        setShowSuggestions(true);
    };

    const onClick = (e, value) => {
        setFilteredSuggestions([]);
        setInput(e.target.innerText);
        setActiveSuggestionIndex(0);
        setShowSuggestions(false);
		history.push('/specific/' + value.id);
      };

      const onKeyDown = (e) => {
        // User pressed the enter key
        if (e.keyCode === 13) {
          setInput(filteredSuggestions[activeSuggestionIndex]);
          setActiveSuggestionIndex(0);
          setShowSuggestions(false);
        }
        // User pressed the up arrow
        else if (e.keyCode === 38) {
          if (activeSuggestionIndex === 0) {
            return;
          }
    
          setActiveSuggestionIndex(activeSuggestionIndex - 1);
        }
        // User pressed the down arrow
        else if (e.keyCode === 40) {
          if (activeSuggestionIndex - 1 === filteredSuggestions.length) {
            return;
          }
    
          setActiveSuggestionIndex(activeSuggestionIndex + 1);
        }
    };

	return (
		<div>
			<div className="searchBar" >
				<input
					className="searchBar__input"
					type="text"
					placeholder="Search..."
					onChange={onChange}
					onKeyDown={onKeyDown}
					value={input}
				/>
				<FaSearch className="searchBar__icon" />
			
			</div>
			{showSuggestions && input && <SuggestionsListComponent filteredSuggestions={filteredSuggestions} onClick={onClick} />}
		</div>
	);
};

export default Typeahead;
