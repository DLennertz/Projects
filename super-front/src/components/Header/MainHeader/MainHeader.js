import { Link } from "react-router-dom";
import "./MainHeader.css";

function MainHeader() {
  return (
    <header className="mainHeader">
      <div className="content">
        <nav>
          <ul>
            <li className="HeaderItem">
              <Link className="route_link" to="/">
                Home
              </Link>
            </li>
            <li className="HeaderItem">
              <Link className="route_link" to="/personagem">
                Personagem
              </Link>
            </li>
            <li className="HeaderItem">
              <Link className="route_link" to="/universe">
                Universe
              </Link>
            </li>
            <li className="HeaderItem">
              <Link className="route_link" to="/race">
                Race
              </Link>
            </li>
            <li className="HeaderItem">
              <Link className="route_link" to="/power">
                Power
              </Link>
            </li>
            <li className="HeaderItem">
              <Link className="route_link" to="/item">
                Item
              </Link>
            </li>
            <li className="HeaderItem">
              <Link className="route_link" to="/hair">
                Hair
              </Link>
            </li>
            <li className="HeaderItem">
              <Link className="route_link" to="/eye">
                Eye
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainHeader;
