import MainHeader from "../../components/Header/MainHeader/MainHeader";
import SubMenuItem from "../../components/Menu/SubMenu/SubMenuItem/SubMenuItem";
import ItemCreateForm from "../../components/Form/Item/ItemCreateForm";

function ItemCreate() {
  return (
    <div className="app">
      <MainHeader />
      <div className="MainContent">
        <SubMenuItem className="SideMenu" />
        <div className="Content">
          <h1>Item</h1>
          <ItemCreateForm />
        </div>
      </div>
    </div>
  );
}

export default ItemCreate;
