import MainHeader from "../../components/Header/MainHeader/MainHeader";
import SubMenuRace from "../../components/Menu/SubMenu/SubMenuRace/SubMenuRace";

function Race() {
  return (
    <div className="app">
      <MainHeader />
      <div className="MainContent">
        <SubMenuRace className="SideMenu" />
        <h1>Race</h1>
      </div>
    </div>
  );
}

export default Race;
