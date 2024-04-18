import { Link, Outlet } from "react-router-dom";
import "./Root.css";

export default function Main() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Pokedex
          </Link>
          <ul className="nav-links">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
}
