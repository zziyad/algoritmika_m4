import React, { useState } from 'react';
import './index.css';
import Movies from '../Movies/Movies';

function SearchBox() {
    const [searchLine, setSearchLine] = useState('')



    // const searchLineChangeHandler = (e) => {
    // }

    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        console.log(e.target.search.value);
        setSearchLine(e.target.search.value);
    }

    return (
        <div className="search-box">
            <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                <label className="search-box__form-label">
                    Искать фильм по названию:
                    <input
                        // value={searchLine}
                        type="text"
                        autoFocus
                        autoComplete="off"
                        name="search"
                        className="search-box__form-input"
                        placeholder="Например, Shawshank Redemption"
                    // onChange={searchLineChangeHandler}
                    />
                </label>
                <button
                    type="submit"
                    className="search-box__form-submit"
                // disabled={!searchLine}
                >
                    Искать
                </button>
            </form>
            <div className="main-page__movies">
                        <Movies />
                    </div>
        </div>
    );
}

export default SearchBox;