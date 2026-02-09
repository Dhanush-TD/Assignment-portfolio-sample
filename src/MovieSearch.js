import React, { useState } from "react";

function MovieSearch() {
  const [movieName, setMovieName] = useState("");
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "cf1a3c27"; 

  const searchMovie = async () => {
    if (!movieName) return;

    try {
      setError("");
      const response = await fetch(
        `https://www.omdbapi.com/?t=${movieName}&apikey=${API_KEY}`
      );
      const data = await response.json();

      if (data.Response === "False") {
        setError("Movie not found");
        setMovie(null);
      } else {
        setMovie(data);
      }
    } catch (err) {
      setError("Error fetching movie data");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "30px auto", textAlign: "center" }}>
      <h2>🎥 Movie Search App</h2>

      <input
        type="text"
        placeholder="Enter movie name"
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
      />
      <br /><br />

      <button onClick={searchMovie}>Search Movie</button>

      <br /><br />

      {error && <p style={{ color: "red" }}>{error}</p>}

      {movie && (
        <div style={{ border: "1px solid #ccc", padding: "15px" }}>
          <h3>{movie.Title}</h3>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <img src={movie.Poster} alt="Movie Poster" width="200" />
        </div>
      )}
    </div>
  );
}

export default MovieSearch;
