import MainHeader from "../../components/Header/MainHeader/MainHeader";
import SubMenuRace from "../../components/Menu/SubMenu/SubMenuRace/SubMenuRace";
import RaceUpdateForm from "../../components/Form/Race/RaceUpdateForm";

function RaceUpdate() {
  return (
    <div className="app">
      <MainHeader />
      <div className="MainContent">
        <SubMenuRace className="SideMenu" />
        <div className="Content">
          <h1>Race</h1>
          <RaceUpdateForm />
        </div>
      </div>
    </div>
  );
}

export default RaceUpdate;
