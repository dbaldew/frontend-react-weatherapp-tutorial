import React, {useState} from 'react';
import './SearchBar.css';

//4.user voert hier zoekterm in. Query opvangen met onChange = setQuery. Value wordt nieuwe state waarde van Query.
//5.Callback prop vanuit App.js: setLocation koppelen aan query.

function SearchBar({setLocationHandler}) {

    const [query, setQuery] = useState("")

    function onFormSubmit(e) {
        e.preventDefault()
        setLocationHandler(query);
    }

//onFormSubmit call zodra het formulier verzonden wordt
    return (
        <form className="searchbar" onSubmit={onFormSubmit}>
            <input
                type="text"
                name="search"
                placeholder="Zoek een stad in Nederland"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <button type="submit">
                Zoek
            </button>
        </form>
    );
}

export default SearchBar;
