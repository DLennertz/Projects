import api from "./api";

export default class PersonagemService {
  getPersonagem() {
    return api.get("personagem").then((res) => res.data);
  }

  getPersonagemById(id) {
    return api.get("personagem/" + id).then((res) => res.data);
  }

  createPersonagem(personagem) {
    return api
      .post("personagem/", personagem, {
        headers: {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data"
          }
        }
      })
      .then((res) => res.data);
  }

  deletePersonagemById(id) {
    return api.delete("personagem/" + id).then((res) => res.data);
  }
}
