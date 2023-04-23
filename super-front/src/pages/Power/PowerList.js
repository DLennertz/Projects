import MainHeader from "../../components/Header/MainHeader/MainHeader";
import SubMenuPower from "../../components/Menu/SubMenu/SubMenuPower/SubMenuPower";
import TablePower from "../../components/Table/Power/TablePower";

function PowerList() {
  return (
    <div className="app">
      <MainHeader />
      <div className="MainContent">
        <SubMenuPower className="SideMenu" />
        <div className="Content">
          <h1>Power</h1>
          <TablePower />
        </div>
      </div>
    </div>
  );
}

export default PowerList;
