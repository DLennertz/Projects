import api from "./api";

export default class CarrosService {
  getTotal() {
    return api
      .get("/carro/count", {
        auth: { username: "usuario", password: "123456" },
      })
      .then((res) => res.data);
  }
  getModelo(pagina, qtdRegistros) {
    return api
      .get("/carro", {
        auth: { username: "usuario", password: "123456" },
        params: { pagina: pagina, qtdRegistros: qtdRegistros },
      })
      .then((res) => res.data);
  }

  getModeloId(id) {
    return api
      .get("/carro/" + id, {
        auth: { username: "usuario", password: "123456" },
      })
      .then((res) => res.data);
  }

  deleteModeloId(id) {
    return api.delete("/carro/" + id).then((res) => res.data);
  }

  createModelo(newModel) {
    return api
      .post("/carro/save", newModel, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
        auth: { username: "usuario", password: "123456" },
      })
      .then((res) => res.data);
  }

  updateModelo(newModel) {
    return api
      .put("/carro/update", newModel, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
        auth: { username: "usuario", password: "123456" },
      })
      .then((res) => res.data);
  }
}
