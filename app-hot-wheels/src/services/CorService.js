import api from "./api";

export default class CorService {
    getTotal() {
      return api
        .get("/cor/count", {
          auth: { username: "usuario", password: "123456" },
        })
        .then((res) => res.data);
    }
    getCor(pagina, qtdRegistros) {
      return api
        .get("/cor", {
          auth: { username: "usuario", password: "123456" },
          params: { pagina: pagina, qtdRegistros: qtdRegistros },
        })
        .then((res) => res.data);
    }
  
    getCorId(id) {
      return api
        .get("/cor/" + id, {
          auth: { username: "usuario", password: "123456" },
        })
        .then((res) => res.data);
    }
  
    deleteCorId(id) {
      return api.delete("/cor/" + id).then((res) => res.data);
    }
  
    createCor(newModel) {
      return api
        .post("/cor/save", newModel, {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
          auth: { username: "usuario", password: "123456" },
        })
        .then((res) => res.data);
    }
  
    updateCor(newModel) {
      return api
        .put("/cor/update", newModel, {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
          auth: { username: "usuario", password: "123456" },
        })
        .then((res) => res.data);
    }
  }