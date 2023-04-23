import MainHeader from "../../components/Header/MainHeader/MainHeader";
import SubMenuEye from "../../components/Menu/SubMenu/SubMenuEye/SubMenuEye.js";
import EyeDeleteForm from "../../components/Form/Eye/EyeDeleteForm";

function EyeDelete() {
  return (
    <div className="app">
      <MainHeader />
      <div className="MainContent">
        <SubMenuEye className="SideMenu" />
        <div className="Content">
          <h1>Eye</h1>
          <EyeDeleteForm />
        </div>
      </div>
    </div>
  );
}

export default EyeDelete;
