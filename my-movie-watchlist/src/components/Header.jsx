import {
    Link
} from "react-router-dom";

export default function Header () {
    return (
    <div className="header-container"> 
      <div className="nav-container">
        <h1>Find your film</h1>
        <Link to="/">My Watchlist</Link>
      </div>
      <form className="search-form">
          <input type="text" placeholder="Search for a movie..." />
          <button type="submit">Search</button>
      </form>
    </div>
  );
}