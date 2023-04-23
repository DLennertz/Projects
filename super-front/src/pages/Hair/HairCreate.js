import MainHeader from "../../components/Header/MainHeader/MainHeader";
import SubMenuHair from "../../components/Menu/SubMenu/SubMenuHair/SubMenuHair";
import HairCreateForm from "../../components/Form/Hair/HairCreateForm";
import "./Hair.css";

function HairCreate() {
  return (
    <div className="app">
      <MainHeader />
      <div className="MainContent">
        <SubMenuHair className="SideMenu" />
        <div className="Content">
          <h1>Hair</h1>
          <HairCreateForm />
        </div>
      </div>
    </div>
  );
}

export default HairCreate;
