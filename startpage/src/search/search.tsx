import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { performSearch } from "@startpage/search";
import { useState } from "react";
import './search.scss';

export const Search = (): JSX.Element => {
    const [searchQuery, setSearchQuery] = useState("");
    const submitSearch = () => performSearch(searchQuery, 'google', {newTab: true, directLink: true})

    return (
        <div className='search-bar'>
            <input
                type='text'
                placeholder='What would you like to know?'
                value={searchQuery}
                onChange={() => setSearchQuery} />
            <button onClick={submitSearch}>
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
    )
};