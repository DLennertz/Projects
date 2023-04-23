import MainHeader from "../../components/Header/MainHeader/MainHeader";
import SubMenuUniverse from "../../components/Menu/SubMenu/SubMenuUniverse/SubMenuUniverse";
import UniverseDeleteForm from "../../components/Form/universe/UniverseDeleteForm";

function UniverseDelete() {
  return (
    <div className="app">
      <MainHeader />
      <div className="MainContent">
        <SubMenuUniverse className="SideMenu" />
        <div className="Content">
          <h1>Universe</h1>
          <UniverseDeleteForm />
        </div>
      </div>
    </div>
  );
}

export default UniverseDelete;
