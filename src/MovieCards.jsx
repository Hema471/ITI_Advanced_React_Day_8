import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "./rtk/MyFav/favoritesSlice";

import "./MovieCards.css";

function MovieCard({ title, imgSrc, id }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const isFavorite = favorites.some((item) => item.id === id);

  const handleToggleFavorites = () => {
    if (isFavorite) {
      // Dispatch the action to remove the movie by id
      dispatch(removeFromFavorites(id));
    } else {
      // If it's not a favorite, add it to favorites
      dispatch(addToFavorites({ id, title, imgSrc }));
    }
  };

  return (
    <div className="col-sm-12 col-md-6 col-lg-3 p-2 ">
      <Link className="text-decoration-none " to={`/movies/${id}`}>
        <div className="movies-cards shadow">
          <div>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${imgSrc}`}
                className="w-100"
                alt=""
              />
            </div>
            <div className="container">
              <h6 className="text-black text-center py-2">{title}</h6>
            </div>
          </div>
        </div>
      </Link>
      <button
        onClick={handleToggleFavorites}
        className={`favorite-button w-100 btn btn-primary justify-content-center ${
          isFavorite ? "remove-favorite" : "add-favorite"
        }`}
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
}
export default MovieCard;
