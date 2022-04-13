import React from "react";
import './search-bar.css';

interface SearchBarProps {
    placeholder: string
    changeQuery: React.Dispatch<React.SetStateAction<string>>
}

export default function SearchBar ({ placeholder, changeQuery }: SearchBarProps ) {
    return (
        <div className='search-box'>
            <div className='search-container'>
                <div className="search-form">

                    <input
                        className="search-input"
                        type="text"
                        placeholder={placeholder}
                        onChange={(e) => changeQuery(e.target.value)}
                    />

                    <button className="btn search-settings-btn">
                        <i className="ri-list-settings-line" />
                    </button>

                </div>
            </div>
        </div>
    );
}