import React, { useState } from "react";
import "../../styles/filter-sort.css";

const FilterSort = ({ onFilterChange, onSortChange, searchComponent }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: "all",
    transmission: "all",
    minPrice: "",
    maxPrice: "",
  });
  const [sortBy, setSortBy] = useState("default");

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
    onSortChange(value);
  };

  const handleReset = () => {
    const resetFilters = {
      priceRange: "all",
      transmission: "all",
      minPrice: "",
      maxPrice: "",
    };
    setFilters(resetFilters);
    setSortBy("default");
    onFilterChange(resetFilters);
    onSortChange("default");
  };

  return (
    <div className="filter-sort">
      <div className="filter-sort__header">
        <button
          className="filter-sort__toggle"
          onClick={() => setShowFilters(!showFilters)}
        >
          <i className="ri-filter-line"></i>
          Filtrlar
          {showFilters ? (
            <i className="ri-arrow-up-s-line"></i>
          ) : (
            <i className="ri-arrow-down-s-line"></i>
          )}
        </button>

        {searchComponent && (
          <div className="filter-sort__search">
            {searchComponent}
          </div>
        )}

        <div className="filter-sort__sort">
          <label htmlFor="sort-select">
            <i className="ri-sort-desc"></i>
            Tartiblash:
          </label>
          <select
            id="sort-select"
            className="filter-sort__select"
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="default">Standart</option>
            <option value="price-low">Narx: Pastdan yuqoriga</option>
            <option value="price-high">Narx: Yuqoridan pastga</option>
            <option value="name-asc">Nomi: A-Z</option>
            <option value="name-desc">Nomi: Z-A</option>
          </select>
        </div>
      </div>

      {showFilters && (
        <div className="filter-sort__panel">
          <div className="filter-sort__group">
            <label className="filter-sort__label">Uzatma turi</label>
            <div className="filter-sort__options">
              <button
                className={`filter-sort__option ${
                  filters.transmission === "all" ? "active" : ""
                }`}
                onClick={() => handleFilterChange("transmission", "all")}
              >
                Barchasi
              </button>
              <button
                className={`filter-sort__option ${
                  filters.transmission === "Automatic" ? "active" : ""
                }`}
                onClick={() => handleFilterChange("transmission", "Automatic")}
              >
                Avtomatik
              </button>
              <button
                className={`filter-sort__option ${
                  filters.transmission === "Manual" ? "active" : ""
                }`}
                onClick={() => handleFilterChange("transmission", "Manual")}
              >
                Mexanik
              </button>
            </div>
          </div>

          <div className="filter-sort__group">
            <label className="filter-sort__label">Narx diapazoni</label>
            <div className="filter-sort__price-range">
              <input
                type="number"
                className="filter-sort__price-input"
                placeholder="Min"
                value={filters.minPrice}
                onChange={(e) => handleFilterChange("minPrice", e.target.value)}
              />
              <span>-</span>
              <input
                type="number"
                className="filter-sort__price-input"
                placeholder="Max"
                value={filters.maxPrice}
                onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
              />
            </div>
          </div>

          <button className="filter-sort__reset" onClick={handleReset}>
            <i className="ri-refresh-line"></i>
            Tozalash
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterSort;
