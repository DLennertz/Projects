import MainHeader from "../../components/Header/MainHeader/MainHeader";
import SubMenuHair from "../../components/Menu/SubMenu/SubMenuHair/SubMenuHair";

function Hair() {
  return (
    <div className="app">
      <MainHeader />
      <div className="MainContent">
        <SubMenuHair className="SideMenu" />
        <h1>Hair</h1>
      </div>
    </div>
  );
}

export default Hair;
