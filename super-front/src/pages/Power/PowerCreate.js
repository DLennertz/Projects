import MainHeader from "../../components/Header/MainHeader/MainHeader";
import SubMenuPower from "../../components/Menu/SubMenu/SubMenuPower/SubMenuPower";
import PowerCreateForm from "../../components/Form/Power/PowerCreateForm";

function PowerCreate() {
  return (
    <div className="app">
      <MainHeader />
      <div className="MainContent">
        <SubMenuPower className="SideMenu" />
        <div className="Content">
          <h1>Power</h1>
          <PowerCreateForm />
        </div>
      </div>
    </div>
  );
}

export default PowerCreate;
