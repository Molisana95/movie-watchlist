import Header from "./components/Header";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist"
import { useState } from "react";
import { Route, Routes, Outlet } from 'react-router-dom'

export default function App() {

    const keywords = ["love", "war", "intelligence", "friend", "kids", "action", "horror"]
    const randomizer = Math.floor(Math.random() * keywords.length)
    const [movies, setMovies] = useState("");
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(null);
    const [searchTerm, setSearchTerm] = useState(() => keywords[randomizer]);
    const [fav, setFav] = useState([])

    return (
        <>
        <Routes>
            <Route path="/" element={
                    <>
                    <Header 
                        searchTerm={searchTerm} 
                        setSearchTerm={setSearchTerm}
                        loading={loading} />
                    <Outlet />
                    </>  
                        }>
                <Route index element={
                    <Movies 
                        movies={movies}
                        fav={fav} 
                        setfav={setFav}
                        loading={loading} 
                        setMovies={setMovies} 
                        setLoading={setLoading} 
                        searchTerm={searchTerm}
                        err={err}
                        setErr={setErr}/>
                }/>
                <Route path="watchlist" element={
                    <Watchlist
                        fav={fav}
                        setfav={setFav}
                />} />
            
            </Route>

        </Routes>

        </>
    );  
}