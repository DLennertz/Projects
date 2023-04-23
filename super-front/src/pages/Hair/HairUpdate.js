import MainHeader from "../../components/Header/MainHeader/MainHeader";
import SubMenuHair from "../../components/Menu/SubMenu/SubMenuHair/SubMenuHair";
import HairUpdateForm from "../../components/Form/Hair/HairUpdateForm";
import "./Hair.css";

function HairUpdate() {
  return (
    <div className="app">
      <MainHeader />
      <div className="MainContent">
        <SubMenuHair className="SideMenu" />
        <div className="Content">
          <h1>Hair</h1>
          <HairUpdateForm />
        </div>
      </div>
    </div>
  );
}

export default HairUpdate;
