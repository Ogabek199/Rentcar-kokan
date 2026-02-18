import React, { useState, useEffect } from "react";
import { isFavorite, toggleFavorite, getLikesCount } from "../../utils/favorites";
import "../../styles/favorite-button.css";

const FavoriteButton = ({ carId, size = "medium", onToggle }) => {
  const [favorited, setFavorited] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  useEffect(() => {
    setFavorited(isFavorite(carId));
    setLikesCount(getLikesCount(carId));
  }, [carId]);

  // Listen for favorite changes from other instances
  useEffect(() => {
    const handleFavoriteChange = (e) => {
      if (e.detail.carId === carId) {
        setFavorited(e.detail.favorited);
        setLikesCount(getLikesCount(carId));
      }
    };
    window.addEventListener("favoriteChanged", handleFavoriteChange);
    return () => {
      window.removeEventListener("favoriteChanged", handleFavoriteChange);
    };
  }, [carId]);

  const handleToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const newState = toggleFavorite(carId);
    setFavorited(newState);
    setLikesCount(getLikesCount(carId));

    // Show notification to other components
    const event = new CustomEvent("favoriteChanged", {
      detail: { carId, favorited: newState },
    });
    window.dispatchEvent(event);

    // Call optional callback
    if (onToggle) {
      onToggle(newState);
    }
  };

  return (
    <div className="favorite-btn-wrapper">
      <button
        className={`favorite-btn favorite-btn--${size} ${favorited ? "favorited" : ""}`}
        onClick={handleToggle}
        aria-label={favorited ? "Sevimlilardan olib tashlash" : "Sevimlilarga qo'shish"}
        title={favorited ? "Sevimlilardan olib tashlash" : "Sevimlilarga qo'shish"}
      >
        <i className={favorited ? "ri-heart-fill" : "ri-heart-line"}></i>
        {likesCount > 0 && (
          <span className="favorite-btn__count">{likesCount}</span>
        )}
      </button>
    </div>
  );
};

export default FavoriteButton;
