import MainHeader from "../../components/Header/MainHeader/MainHeader";
import SubMenuEye from "../../components/Menu/SubMenu/SubMenuEye/SubMenuEye";
import TableEye from "../../components/Table/Eye/TableEye.js";

function EyeList() {
  return (
    <div className="app">
      <MainHeader />
      <div className="MainContent">
        <SubMenuEye className="SideMenu" />
        <div className="Content">
          <h1>Eye</h1>
          <TableEye />
        </div>
      </div>
    </div>
  );
}

export default EyeList;
