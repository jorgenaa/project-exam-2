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

    const renderSuggestions = () => {
        if(suggestions.length === 0) {
            return null;
        }else {
            return (
                <ul>
                    {suggestions.map((hotel) => <li key={hotel.id}>{hotel.name}</li>)}
                </ul>
            )
        }
    }

    return (
        <div>
            <input type="text" value={text} onChange={onTextChangeHandler} />
            {renderSuggestions()}
        </div>
    )
}

export default AutoCompleteText;