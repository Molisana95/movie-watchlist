import { useState, useEffect } from "react";

export default function Movies({ movies, loading, setMovies, setLoading, searchTerm, err, setErr }) {

    useEffect(() => {
        setLoading(true);
        
        async function fetchMovies() {
            try {
                const res = await fetch(`/.netlify/functions/serverless?s=${searchTerm}`);
                if (!res.ok) {
                    throw new Error(`Could not load movies: ${res.status}`);
                }
                const data = await res.json();
                if (data.Response === "False") {
                    setErr(data.Error);
                    setMovies([]);
                } else {
                    setErr(null);
                    setMovies(data.Search);
                }
                console.log(data)

            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchMovies();
    }, [searchTerm]);

     
    const movieRender = () => {
        if (!movies || movies.length === 0) {
            return <p>Search for a movie to see results.</p>;
        }
        return movies.map((movie) => {
            return (
                <div className="movie" key={movie.imdbID}>
                    {movie.Poster && <img src={movie.Poster} alt={`poster of ${movie.Title}`} />}
                    <div className="movie-info">
                        <div className="left-info">
                            <p>{movie.Year}</p>
                            <h2>{movie.Title}</h2>
                            <p>{movie.Plot}</p>
                        </div>
                        <div className="right-info">
                            <p>{movie.Runtime}</p>
                            <p>{movie.Genre}</p>
                        </div>
                    </div>
                    <div className="like-btn">
                        <button role="button">Add</button>
                    </div>
                </div>
            );
        });
    };


    return (
        <div className="movie-list">
            {err !== null && <p>{err}</p>}
            {movies && movies.length === 0 && <p>No movies found for "{searchTerm}".</p>}
            {loading && <p>Loading...</p>}
            {!loading && movies.length > 0 && movieRender()}
            {!loading && !movies && <p>Search for a movie to see results.</p>}
        </div>
    )

}

