import { Link } from "react-router-dom";

function SubMenuPower() {
  return (
    <div className="SideMenu">
      <nav>
        <ul>
          <li>
            <Link className="route_link" to="/power">
              Main
            </Link>
          </li>
          <li>
            <Link className="route_link" to="/power/create">
              Create
            </Link>
          </li>
          <li>
            <Link className="route_link" to="/power/update">
              Update
            </Link>
          </li>
          <li>
            <Link className="route_link" to="/power/list">
              List
            </Link>
          </li>
          <Link className="route_link" to="/power/delete">
            <li>Delete</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default SubMenuPower;
