import { Link } from "react-router-dom";

function SubMenuPersonagem() {
  return (
    <div className="SideMenu">
      <nav>
        <ul>
          <li>
            <Link className="route_link" to="/personagem">
              Main
            </Link>
          </li>
          <li>
            <Link className="route_link" to="/personagem/create">
              Create
            </Link>
          </li>
          <li>
            <Link className="route_link" to="/personagem/update">
              Update
            </Link>
          </li>
          <li>
            <Link className="route_link" to="/personagem/list">
              List
            </Link>
          </li>
          <li>
            <Link className="route_link" to="/personagem/delete">
              <li>Delete</li>
            </Link>
          </li>
          <li>
            <Link className="route_link" to="/personagem/addPhotosbatch">
              <li>Add Photos</li>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SubMenuPersonagem;
