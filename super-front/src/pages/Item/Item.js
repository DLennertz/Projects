import MainHeader from "../../components/Header/MainHeader/MainHeader";
import SubMenuItem from "../../components/Menu/SubMenu/SubMenuItem/SubMenuItem";

function Item() {
  return (
    <div className="app">
      <MainHeader />
      <div className="MainContent">
        <SubMenuItem className="SideMenu" />
        <h1>Item</h1>
      </div>
    </div>
  );
}

export default Item;
