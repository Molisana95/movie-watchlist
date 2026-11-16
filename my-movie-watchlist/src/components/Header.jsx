import {
    Link
} from "react-router-dom";
import { useRef } from "react";
import { useLocation } from "react-router-dom" 

export default function Header ({ searchTerm, setSearchTerm, loading }) {
    const ref = useRef(null);
    const location = useLocation()

    return (
    <div className="header-container"> 
      <div className="nav-container">
        <Link to="/" className="home-link">
          <h1>Find your film</h1>        
        </Link>
        <Link to="/watchlist">My Watchlist</Link>
      </div>
      {location.pathname !== "/watchlist" && <form className="search-form" onSubmit={e => {
        e.preventDefault();
        setSearchTerm(ref.current.value);
      }}>
          <input type="text" 
            placeholder="Search for a movie..." ref={ref} />
          <button type="submit" disabled={loading}>
            {loading ? "Searching..." : "Search"}
          </button>
      </form>}
    </div>
  );
}