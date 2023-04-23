import api from "./api";

export default class UniverseService {
  getUniverse() {
    return api.get("universe").then((res) => res.data);
  }

  getUniverseById(id) {
    return api.get("universe/" + id).then((res) => res.data);
  }

  createUniverse(universe) {
    return api
      .post("universe", universe, {
        headers: {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data"
          }
        }
      })
      .then((res) => res.data);
  }

  updateUniverse(universe) {
    return api
      .put("universe", universe, {
        headers: {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data"
          }
        }
      })
      .then((res) => res.data);
  }

  deleteUniverseById(id) {
    return api
      .delete("universe/" + id, {
        headers: {
          headers: {
            Accept: "application/json"
          }
        }
      })
      .then((res) => res.data);
  }
}
