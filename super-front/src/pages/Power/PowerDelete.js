import MainHeader from "../../components/Header/MainHeader/MainHeader";
import SubMenuPower from "../../components/Menu/SubMenu/SubMenuPower/SubMenuPower";
import PowerDeleteForm from "../../components/Form/Power/PowerDeleteForm";

function PowerDelete() {
  return (
    <div className="app">
      <MainHeader />
      <div className="MainContent">
        <SubMenuPower className="SideMenu" />
        <div className="Content">
          <h1>Power</h1>
          <PowerDeleteForm />
        </div>
      </div>
    </div>
  );
}

export default PowerDelete;
