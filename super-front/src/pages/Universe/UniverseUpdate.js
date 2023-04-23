import MainHeader from "../../components/Header/MainHeader/MainHeader";
import SubMenuUniverse from "../../components/Menu/SubMenu/SubMenuUniverse/SubMenuUniverse";
import UniverseUpdateForm from "../../components/Form/universe/UniverseUpdateForm";
function UniverseCreate() {
  return (
    <div className="app">
      <MainHeader />
      <div className="MainContent">
        <SubMenuUniverse className="SideMenu" />
        <div className="Content">
          <h1>Universe</h1>
          <UniverseUpdateForm />
        </div>
      </div>
    </div>
  );
}

export default UniverseCreate;
