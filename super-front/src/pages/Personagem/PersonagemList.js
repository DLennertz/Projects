import MainHeader from "../../components/Header/MainHeader/MainHeader";
import SubMenuPersonagem from "../../components/Menu/SubMenu/SubMenuPersonagem/SubMenuPersonagem";
import TablePersonagem from "../../components/Table/Personagem/TablePersonagem";

function PersonagemList() {
  return (
    <div className="app">
      <MainHeader />
      <div className="MainContent">
        <SubMenuPersonagem className="SideMenu" />
        <div className="Content">
          <h1>Personagem</h1>
          <TablePersonagem />
        </div>
      </div>
    </div>
  );
}

export default PersonagemList;
