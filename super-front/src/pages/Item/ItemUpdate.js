import MainHeader from "../../components/Header/MainHeader/MainHeader";
import SubMenuItem from "../../components/Menu/SubMenu/SubMenuItem/SubMenuItem";
import ItemUpdateForm from "../../components/Form/Item/ItemUpdateForm";

function ItemUpdate() {
  return (
    <div className="app">
      <MainHeader />
      <div className="MainContent">
        <SubMenuItem className="SideMenu" />
        <div className="Content">
          <h1>Item</h1>
          <ItemUpdateForm />
        </div>
      </div>
    </div>
  );
}

export default ItemUpdate;
