import Header from "./components/Header";
import Movies from "./components/Movies";
import { useState } from "react";


export default function App() {
    const [movies, setMovies] = useState("");
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
        <Header 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm}
            loading={loading} />
        <Movies 
            movies={movies} 
            loading={loading} 
            setMovies={setMovies} 
            setLoading={setLoading} 
            searchTerm={searchTerm}/>
        </>
    );  
}