import MainHeader from "../../components/Header/MainHeader/MainHeader";
import SubMenuPower from "../../components/Menu/SubMenu/SubMenuPower/SubMenuPower";

function Power() {
  return (
    <div className="app">
      <MainHeader />
      <div className="MainContent">
        <SubMenuPower />
        <h1>Power</h1>
      </div>
    </div>
  );
}

export default Power;
