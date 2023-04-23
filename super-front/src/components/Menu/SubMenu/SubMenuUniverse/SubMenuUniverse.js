import { Link } from "react-router-dom";

function SubMenuUniverse() {
  return (
    <div className="SideMenu">
      <nav>
        <ul>
          <li>
            <Link className="route_link" to="/universe">
              Main
            </Link>
          </li>
          <li>
            <Link className="route_link" to="/universe/create">
              Create
            </Link>
          </li>
          <li>
            <Link className="route_link" to="/universe/update">
              Update
            </Link>
          </li>
          <li>
            <Link className="route_link" to="/universe/list">
              List
            </Link>
          </li>
          <Link className="route_link" to="/universe/delete">
            <li>Delete</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default SubMenuUniverse;
