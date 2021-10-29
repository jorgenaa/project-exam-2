
const SuggestionsListComponent = ({filteredSuggestions, activeSuggestionIndex, onClick}) => {
    return filteredSuggestions.length ? (
      <ul className="searchBar__options">
        {filteredSuggestions.map((hotel, index) => {
          let className;
          
          if (index === activeSuggestionIndex) {
            className = 'searchBar__options-item';
          }
          return (
            <li className={className} key={hotel.id} onClick={() => onClick(hotel)}>
              {hotel.name}
            </li>
          );
        })}
      </ul>
    ) : (
      <div className="searchBar__options-item searchBar__options-item--no-suggestions">
        <em>No suggestions</em>
      </div>
    );
  };

  export default SuggestionsListComponent;