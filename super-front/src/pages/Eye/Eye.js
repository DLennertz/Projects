import MainHeader from "../../components/Header/MainHeader/MainHeader";
import SubMenuEye from "../../components/Menu/SubMenu/SubMenuEye/SubMenuEye.js";

function Eye() {
  return (
    <div className="app">
      <MainHeader />
      <div className="MainContent">
        <SubMenuEye className="SideMenu" />
        <h1>Eye</h1>
      </div>
    </div>
  );
}

export default Eye;
