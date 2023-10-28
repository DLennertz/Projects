import MainHeader from "../../components/Header/MainHeader/MainHeader";
import SubMenuHair from "../../components/Menu/SubMenu/SubMenuHair/SubMenuHair";
import RaceDeleteForm from "../../components/Form/Race/RaceDeleteForm";

function RaceDelete() {
  return (
    <div className="app">
      <MainHeader />
      <div className="MainContent">
        <SubMenuHair className="SideMenu" />
        <div className="Content">
          <h1>Race</h1>
          <RaceDeleteForm />
        </div>
      </div>
    </div>
  );
}

export default RaceDelete;
