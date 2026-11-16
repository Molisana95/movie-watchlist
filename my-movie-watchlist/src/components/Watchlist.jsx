import Favourites from "../functionality/Favourites"

export default function Watchlist({ fav, setfav }) {

    const favEls = fav.map(movie => {
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
            )
    })

    return (
        <div className="movie-list">
            {fav.length > 0 ? favEls : <h3>The movies you like will be shown here.</h3>}
        </div>
    )
}

/*
function handleFavMovies (movie) {
        if(fav.some(m => m.Title === movie.Title)) {
            const newArr = fav.filter(m => m.Title !== movie.Title)
            setfav(newArr)
        } else {
            setfav(prev => [...prev, movie])

        }
    }

    <div className="like-btn">
        <button role="button" onClick={() => handleFavMovies(movie)}>Remove</button>
    </div>
*/