import MainHeader from "../../components/Header/MainHeader/MainHeader";
import SubMenuEye from "../../components/Menu/SubMenu/SubMenuEye/SubMenuEye.js";
import EyeUpdateForm from "../../components/Form/Eye/EyeUpdateForm.js";

function EyeUpdate() {
  return (
    <div className="app">
      <MainHeader />
      <div className="MainContent">
        <SubMenuEye className="SideMenu" />
        <div className="Content">
          <h1>Eye</h1>
          <EyeUpdateForm />
        </div>
      </div>
    </div>
  );
}

export default EyeUpdate;
