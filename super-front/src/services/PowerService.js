import api from "./api";

export default class PowerService {
  getPower() {
    return api.get("power").then((res) => res.data);
  }

  getPowerById(id) {
    return api.get("power/" + id).then((res) => res.data);
  }

  createPower(power) {
    return api
      .post("power", power, {
        headers: {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data"
          }
        }
      })
      .then((res) => res.data);
  }
  updatePower(power) {
    return api
      .put("power", power, {
        headers: {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data"
          }
        }
      })
      .then((res) => res.data);
  }

  deletePowerById(id) {
    return api
      .delete("power/" + id, {
        headers: {
          headers: {
            Accept: "application/json"
          }
        }
      })
      .then((res) => res.data);
  }
}
