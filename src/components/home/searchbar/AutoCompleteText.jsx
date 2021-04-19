import { useState } from 'react';

const AutoCompleteText = ({hotels}) => {
    const [suggestions, setSuggestions] = useState([]);
    const [text, setText] = useState("");

    const onTextChangeHandler = (e) => {
        const searchValue = e.target.value.toLowerCase();
        let suggestionsValue = [];
       
        if(searchValue.length === 0) {
            const regex = new RegExp(`^${searchValue}`, 'i');
            suggestionsValue = hotels.filter(hotel => regex.test(hotel));
        } 
        setSuggestions(suggestionsValue);
        setText(searchValue);
    }

    const suggestionSelected = (value) => {
        setText(value);
        setSuggestions([]);
    }

    const renderSuggestions = () => {
        if(suggestions.length === 0) {
            return null;
        }else {
            return (
                <ul className="searchBar__options">
                    {suggestions.map((hotel) => <li className="searchBar__options-item" onClick={() => suggestionSelected(hotel.name)} key={hotel.id}>{hotel.name}</li>)}
                </ul>
            )
        }
    }

    return (
        <div className="searchBar__input-container">
            <input className="searchBar__input" type="text" value={text} onChange={onTextChangeHandler} />
            {renderSuggestions()}
        </div>
    )
}

export default AutoCompleteText;