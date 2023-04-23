import MainHeader from "../../components/Header/MainHeader/MainHeader";
import SubMenuEye from "../../components/Menu/SubMenu/SubMenuEye/SubMenuEye.js";
import EyeCreateForm from "../../components/Form/Eye/EyeCreateForm.js";

function EyeCreate() {
  return (
    <div className="app">
      <MainHeader />
      <div className="MainContent">
        <SubMenuEye className="SideMenu" />
        <div className="Content">
          <h1>Eye</h1>
          <EyeCreateForm />
        </div>
      </div>
    </div>
  );
}

export default EyeCreate;
