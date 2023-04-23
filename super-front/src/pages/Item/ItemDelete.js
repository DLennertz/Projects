import MainHeader from "../../components/Header/MainHeader/MainHeader";
import SubMenuItem from "../../components/Menu/SubMenu/SubMenuItem/SubMenuItem";
import ItemDeleteForm from "../../components/Form/Item/ItemDeleteForm";

function ItemDelete() {
  return (
    <div className="app">
      <MainHeader />
      <div className="MainContent">
        <SubMenuItem className="SideMenu" />
        <div className="Content">
          <h1>Item</h1>
          <ItemDeleteForm />
        </div>
      </div>
    </div>
  );
}

export default ItemDelete;
