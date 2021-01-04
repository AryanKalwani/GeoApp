import React from 'react';

const Search = () => {
    return (
        <div>
            <div className="newStyle">
                <h1>
                Search For Friends
                </h1>
            </div>
            <div className="search">
                <input className="searchbar" type="text" placeholder="ENTER USERNAME">
                </input>
                <button>
                        <i className="fa fa-search"> search</i>
                </button>
            </div>
        </div>
    )
}

export default Search;