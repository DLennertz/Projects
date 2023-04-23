import MainHeader from "../../components/Header/MainHeader/MainHeader";
import SubMenuHair from "../../components/Menu/SubMenu/SubMenuHair/SubMenuHair";
import TableHair from "../../components/Table/Hair/TableHair";
import "./Hair.css";

function HairList() {
  return (
    <div className="app">
      <MainHeader />
      <div className="MainContent">
        <SubMenuHair className="SideMenu" />
        <div className="Content">
          <h1>Hair</h1>
          <TableHair />
        </div>
      </div>
    </div>
  );
}

export default HairList;
