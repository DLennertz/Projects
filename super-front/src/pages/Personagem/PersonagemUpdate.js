import SubMenuPersonagem from "../../components/Menu/SubMenu/SubMenuPersonagem/SubMenuPersonagem";
import MainHeader from "../../components/Header/MainHeader/MainHeader";
import UpdatePersonagemForm from "../../components/Form/Personagem/UpdatePersonagemForm";

function PersonagemUpdate() {
  return (
    <div className="app">
      <MainHeader />
      <div className="MainContent">
        <SubMenuPersonagem className="SideMenu" />
        <div className="Content">
          <h1>Personagem</h1>
          <UpdatePersonagemForm />
        </div>
      </div>
    </div>
  );
}

export default PersonagemUpdate;
