export default function Favourites({ movie, fav, setfav }) {

    function handleFavMovies(movie, fav, setfav) {
        if(fav.some(m => m.Title === movie.Title)) {
                const newArr = fav.filter(m => m.Title !== movie.Title)
                setfav(newArr)
            } else {
                setfav(prev => [...prev, movie])
            }
    }
    return (
        <>
            <div className="like-btn">
                {fav.some(m => m.Title === movie.Title) ? 
                    <button role="button" onClick={() => handleFavMovies(movie, fav, setfav)}>Remove</button> :
                    <button role="button" onClick={() => handleFavMovies(movie, fav, setfav)}>Add</button>
                }
            </div>
        </>
    )
}