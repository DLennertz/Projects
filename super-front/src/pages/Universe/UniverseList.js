import MainHeader from "../../components/Header/MainHeader/MainHeader";
import SubMenuUniverse from "../../components/Menu/SubMenu/SubMenuUniverse/SubMenuUniverse";
import TableUniverse from "../../components/Table/Universe/TableUniverse";

function UniverseList() {
  return (
    <div className="app">
      <MainHeader />
      <div className="MainContent">
        <SubMenuUniverse className="SideMenu" />
        <div className="Content">
          <h1>Universe</h1>
          <TableUniverse />
        </div>
      </div>
    </div>
  );
}

export default UniverseList;
