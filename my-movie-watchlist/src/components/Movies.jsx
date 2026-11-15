import { useState, useEffect } from "react";

export default function Movies({ movies, loading, setMovies, setLoading, searchTerm }) {

    useEffect(() => {
        setLoading(true);
        
        async function fetchMovies() {
            try {
                const res = await fetch(`/.netlify/functions/serverless?t=${searchTerm}`);
                if (!res.ok) {
                    throw new Error(`Could not load movies: ${res.status}`);
                }
                const data = await res.json();
                setMovies(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchMovies();
    }, [searchTerm]);

     
    


    return (
        <div className="movie-list">
            {loading && <p>Loading...</p>}
            {!loading && !movies && <p>Search for a movie to see results.</p>}
            {movies && movies.Error && <p>{movies.Error}</p>}
            {movies && !movies.Error && (
              <div className="movie">
                  {movies && <img src={movies.Poster} alt={`poster of ${movies.Title}`} />}
                  <div className="movie-info">
                    <div className="left-info">
                      {movies && <p>{movies.Year}</p>}
                      {movies && <h2>{movies.Title}</h2>}
                      {movies && <p>{movies.Plot}</p>}
                    </div>
                    <div className="right-info">
                      {movies && <p>{movies.Runtime}</p>}
                      {movies && <p>{movies.Genre}</p>}
                    </div>
                  </div>
                  <div className="like-btn">
                    <button role="button">Add to Watchlist</button>
                  </div>
              </div>)}
        </div>
    )
}

