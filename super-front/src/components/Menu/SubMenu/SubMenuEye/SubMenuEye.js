import { Link } from "react-router-dom";

function SubMenuEye() {
  return (
    <div className="SideMenu">
      <nav>
        <ul>
          <li>
            <Link className="route_link" to="/eye">
              Main
            </Link>
          </li>
          <li>
            <Link className="route_link" to="/eye/create">
              Create
            </Link>
          </li>
          <li>
            <Link className="route_link" to="/eye/update">
              Update
            </Link>
          </li>
          <li>
            <Link className="route_link" to="/eye/list">
              List
            </Link>
          </li>
          <Link className="route_link" to="/eye/delete">
            <li>Delete</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default SubMenuEye;
