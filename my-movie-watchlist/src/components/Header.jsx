import {
    Link
} from "react-router-dom";
import { useRef } from "react";

export default function Header ({ searchTerm, setSearchTerm, loading }) {
    const ref = useRef(null);

    return (
    <div className="header-container"> 
      <div className="nav-container">
        <h1>Find your film</h1>
        <Link to="/">My Watchlist</Link>
      </div>
      <form className="search-form" onSubmit={e => {
        e.preventDefault();
        setSearchTerm(ref.current.value);
      }}>
          <input type="text" 
            placeholder="Search for a movie..." ref={ref} />
          <button type="submit" disabled={loading}>
            {loading ? "Searching..." : "Search"}
          </button>
      </form>
    </div>
  );
}