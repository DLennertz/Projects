import SubMenuPersonagem from "../../components/Menu/SubMenu/SubMenuPersonagem/SubMenuPersonagem";
import MainHeader from "../../components/Header/MainHeader/MainHeader";
import AddPhotoBatch from "../../components/Form/personagem/AddPhotobatch";

function PersonagemAddPhotoBatch() {
  return (
    <div className="app">
      <MainHeader />
      <div className="MainContent">
        <SubMenuPersonagem className="SideMenu" />
        <div className="Content">
          <h1>Personagem</h1>
          <AddPhotoBatch />
        </div>
      </div>
    </div>
  );
}

export default PersonagemAddPhotoBatch;
