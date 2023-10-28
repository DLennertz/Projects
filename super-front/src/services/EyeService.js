import api from "./api";

export default class EyeService {
  getEye() {
    return api.get("eye").then((res) => res.data);
  }

  getEyeById(id) {
    return api.get("eye/" + id).then((res) => res.data);
  }

  createEye(eye) {
    return api
      .post("eye/", eye, {
        headers: {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      })
      .then((res) => res.data);
  }

  updateEye(eye) {
    return api
      .put("eye/", eye, {
        headers: {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      })
      .then((res) => res.data);
  }

  deleteEyeById(id) {
    return api
      .delete("eye/" + id, {
        headers: {
          headers: {
            Accept: "application/json",
          },
        },
      })
      .then((res) => res.true);
  }
}
