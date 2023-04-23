import { Link } from "react-router-dom";

function SubMenuRace() {
  return (
    <div className="SideMenu">
      <nav>
        <ul>
          <li>
            <Link className="route_link" to="/race">
              Main
            </Link>
          </li>
          <li>
            <Link className="route_link" to="/race/create">
              Create
            </Link>
          </li>
          <li>
            <Link className="route_link" to="/race/update">
              Update
            </Link>
          </li>
          <li>
            <Link className="route_link" to="/race/list">
              List
            </Link>
          </li>
          <Link className="route_link" to="/race/delete">
            <li>Delete</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default SubMenuRace;
