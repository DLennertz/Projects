import { Link } from "react-router-dom";

function SubItemUniverse() {
  return (
    <div className="SideMenu">
      <nav>
        <ul>
          <li>
            <Link className="route_link" to="/item">
              Main
            </Link>
          </li>
          <li>
            <Link className="route_link" to="/item/create">
              Create
            </Link>
          </li>
          <li>
            <Link className="route_link" to="/item/update">
              Update
            </Link>
          </li>
          <li>
            <Link className="route_link" to="/item/list">
              List
            </Link>
          </li>
          <Link className="route_link" to="/item/delete">
            <li>Delete</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default SubItemUniverse;
