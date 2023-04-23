import MainHeader from "../../components/Header/MainHeader/MainHeader";
import SubMenuItem from "../../components/Menu/SubMenu/SubMenuItem/SubMenuItem";
import TableItem from "../../components/Table/Item/TableItem";

function ItemList() {
  return (
    <div className="app">
      <MainHeader />
      <div className="MainContent">
        <SubMenuItem className="SideMenu" />
        <div className="Content">
          <h1>Item</h1>
          <TableItem />
        </div>
      </div>
    </div>
  );
}

export default ItemList;
