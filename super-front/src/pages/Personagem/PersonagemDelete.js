import MainHeader from "../../components/Header/MainHeader/MainHeader";
import SubMenuPersonagem from "../../components/Menu/SubMenu/SubMenuPersonagem/SubMenuPersonagem";
import PersonagemDeleteForm from "../../components/Form/Personagem/PersonagemDeleteForm";

function PersonagemDelete() {
  return (
    <div className="app">
      <MainHeader />
      <div className="MainContent">
        <SubMenuPersonagem className="SideMenu" />
        <div className="Content">
          <h1>Personagem</h1>
          <PersonagemDeleteForm />
        </div>
      </div>
    </div>
  );
}

export default PersonagemDelete;
