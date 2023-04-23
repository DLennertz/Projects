import MainHeader from "../../components/Header/MainHeader/MainHeader";
import SubMenuRace from "../../components/Menu/SubMenu/SubMenuRace/SubMenuRace";
import TableRace from "../../components/Table/Race/TableRace";

function RaceList() {
  return (
    <div className="app">
      <MainHeader />
      <div className="MainContent">
        <SubMenuRace className="SideMenu" />
        <div className="Content">
          <h1>Race</h1>
          <TableRace />
        </div>
      </div>
    </div>
  );
}

export default RaceList;
