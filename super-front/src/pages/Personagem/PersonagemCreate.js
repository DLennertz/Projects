import SubMenuPersonagem from "../../components/Menu/SubMenu/SubMenuPersonagem/SubMenuPersonagem";
import MainHeader from "../../components/Header/MainHeader/MainHeader";
import CreatePersonagemForm from "../../components/Form/personagem/CreatePersonagemForm";

function PersonagemCreate() {
  return (
    <div className="app">
      <MainHeader />
      <div className="MainContent">
        <SubMenuPersonagem className="SideMenu" />
        <div className="Content">
          <h1>Personagem</h1>
          <CreatePersonagemForm />
        </div>
      </div>
    </div>
  );
}

export default PersonagemCreate;
