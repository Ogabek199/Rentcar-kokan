import React, { useState } from "react";
import "../../styles/search-bar.css";

const SearchBar = ({ onSearch, placeholder = "Avtomobil nomi bo'yicha qidirish..." }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleClear = () => {
    setSearchTerm("");
    onSearch("");
  };

  return (
    <div className="search-bar">
      <div className="search-bar__wrapper">
        <i className="ri-search-line search-bar__icon"></i>
        <input
          type="text"
          className="search-bar__input"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleChange}
        />
        {searchTerm && (
          <button
            type="button"
            className="search-bar__clear"
            onClick={handleClear}
            aria-label="Tozalash"
          >
            <i className="ri-close-line"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
