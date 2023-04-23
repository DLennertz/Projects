import MainHeader from "../../components/Header/MainHeader/MainHeader";
import SubMenuPersonagem from "../../components/Menu/SubMenu/SubMenuPersonagem/SubMenuPersonagem";

function Personagem() {
  return (
    <div className="app">
      <MainHeader />
      <div className="MainContent">
        <SubMenuPersonagem className="SideMenu" />
        <h1>Personagem</h1>
      </div>
    </div>
  );
}

export default Personagem;
