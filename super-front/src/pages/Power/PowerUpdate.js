import MainHeader from "../../components/Header/MainHeader/MainHeader";
import SubMenuPower from "../../components/Menu/SubMenu/SubMenuPower/SubMenuPower";
import PowerUpdateForm from "../../components/Form/Power/PowerUpdateForm";

function PowerUpdate() {
  return (
    <div className="app">
      <MainHeader />
      <div className="MainContent">
        <SubMenuPower className="SideMenu" />
        <div className="Content">
          <h1>Power</h1>
          <PowerUpdateForm />
        </div>
      </div>
    </div>
  );
}

export default PowerUpdate;
