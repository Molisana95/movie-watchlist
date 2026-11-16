import { useEffect } from "react";
import Favourites from "../functionality/Favourites"

export default function Movies({ movies, loading, setMovies, setLoading, searchTerm, err, setErr, fav, setfav }) {
    
    useEffect(() => {
        setLoading(true);
        console.log(searchTerm)
        
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
                    <Favourites 
                        movie={movie}
                        fav={fav}
                        setfav={setfav}
                    />
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

/*function handleFavMovies (movie) {
        if(fav.some(m => m.Title === movie.Title)) {
            const newArr = fav.filter(m => m.Title !== movie.Title)
            setfav(newArr)
        } else {
            setfav(prev => [...prev, movie])

        }
    }
        
    <div className="like-btn">
        {fav.some(m => m.Title === movie.Title) ? 
            <button role="button" onClick={() => handleFavMovies(movie)}>Remove</button> :
            <button role="button" onClick={() => handleFavMovies(movie)}>Add</button>
        }
                        
    </div>
    */