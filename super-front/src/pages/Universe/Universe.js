import MainHeader from "../../components/Header/MainHeader/MainHeader";
import SubMenuUniverse from "../../components/Menu/SubMenu/SubMenuUniverse/SubMenuUniverse";

function Universe() {
  return (
    <div className="app">
      <MainHeader />
      <div className="MainContent">
        <SubMenuUniverse className="SideMenu" />
        <h1>Universe</h1>
      </div>
    </div>
  );
}

export default Universe;
