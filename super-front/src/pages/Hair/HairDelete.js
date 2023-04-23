import MainHeader from "../../components/Header/MainHeader/MainHeader";
import SubMenuHair from "../../components/Menu/SubMenu/SubMenuHair/SubMenuHair";
import HairDeleteForm from "../../components/Form/Hair/HairDeleteForm";
import "./Hair.css";

function HairDelete() {
  return (
    <div className="app">
      <MainHeader />
      <div className="MainContent">
        <SubMenuHair className="SideMenu" />
        <div className="Content">
          <h1>Hair</h1>
          <HairDeleteForm />
        </div>
      </div>
    </div>
  );
}

export default HairDelete;
