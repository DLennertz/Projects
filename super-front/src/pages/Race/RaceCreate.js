import MainHeader from "../../components/Header/MainHeader/MainHeader";
import SubMenuRace from "../../components/Menu/SubMenu/SubMenuRace/SubMenuRace";
import RaceCreateForm from "../../components/Form/Race/RaceCreateForm";

function RaceCreate() {
  return (
    <div className="app">
      <MainHeader />
      <div className="MainContent">
        <SubMenuRace className="SideMenu" />
        <div className="Content">
          <h1>Race</h1>
          <RaceCreateForm />
        </div>
      </div>
    </div>
  );
}

export default RaceCreate;
