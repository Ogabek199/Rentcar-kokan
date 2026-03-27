import React, { useState } from "react";
import "../../styles/filter-sort.css";
import { useTranslation } from "../../i18n/LanguageContext";

const FilterSort = ({ onFilterChange, onSortChange, searchComponent }) => {
  const { t } = useTranslation();
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
          {t("filter.filters")}
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
            {t("filter.sort")}
          </label>
          <select
            id="sort-select"
            className="filter-sort__select"
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="default">{t("filter.default")}</option>
            <option value="price-low">{t("filter.priceLow")}</option>
            <option value="price-high">{t("filter.priceHigh")}</option>
            <option value="name-asc">{t("filter.nameAsc")}</option>
            <option value="name-desc">{t("filter.nameDesc")}</option>
          </select>
        </div>
      </div>

      {showFilters && (
        <div className="filter-sort__panel">
          <div className="filter-sort__group">
            <label className="filter-sort__label">{t("filter.transmission")}</label>
            <div className="filter-sort__options">
              <button
                className={`filter-sort__option ${
                  filters.transmission === "all" ? "active" : ""
                }`}
                onClick={() => handleFilterChange("transmission", "all")}
              >
                {t("filter.all")}
              </button>
              <button
                className={`filter-sort__option ${
                  filters.transmission === "Automatic" ? "active" : ""
                }`}
                onClick={() => handleFilterChange("transmission", "Automatic")}
              >
                {t("filter.automatic")}
              </button>
              <button
                className={`filter-sort__option ${
                  filters.transmission === "Manual" ? "active" : ""
                }`}
                onClick={() => handleFilterChange("transmission", "Manual")}
              >
                {t("filter.manual")}
              </button>
            </div>
          </div>

          <div className="filter-sort__group">
            <label className="filter-sort__label">{t("filter.priceRange")}</label>
            <div className="filter-sort__price-range">
              <input
                type="number"
                className="filter-sort__price-input"
                placeholder={t("filter.min")}
                value={filters.minPrice}
                onChange={(e) => handleFilterChange("minPrice", e.target.value)}
              />
              <span>-</span>
              <input
                type="number"
                className="filter-sort__price-input"
                placeholder={t("filter.max")}
                value={filters.maxPrice}
                onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
              />
            </div>
          </div>

          <button className="filter-sort__reset" onClick={handleReset}>
            <i className="ri-refresh-line"></i>
            {t("filter.clear")}
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterSort;
