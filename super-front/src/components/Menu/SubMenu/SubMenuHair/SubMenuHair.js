import { Link } from "react-router-dom";

import "./SubMenuHair";

function SubMenuHair() {
  return (
    <div className="SideMenu">
      <nav>
        <ul>
          <li>
            <Link className="route_link" to="/hair">
              Main
            </Link>
          </li>
          <li>
            <Link className="route_link" to="/hair/create">
              Create
            </Link>
          </li>
          <li>
            <Link className="route_link" to="/hair/update">
              Update
            </Link>
          </li>
          <li>
            <Link className="route_link" to="/hair/list">
              List
            </Link>
          </li>
          <Link className="route_link" to="/hair/delete">
            <li>Delete</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default SubMenuHair;
