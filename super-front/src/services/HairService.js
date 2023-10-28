import api from "./api";

export default class HairService {
  getHair() {
    return api.get("hair").then((res) => res.data);
  }

  getHairById(id) {
    return api.get("hair/" + id).then((res) => res.data);
  }

  createHair(hair) {
    return api
      .post("hair/", hair, {
        headers: {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      })
      .then((res) => res.data);
  }

  updateHair(hair) {
    return api
      .put("hair/", hair, {
        headers: {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      })
      .then((res) => res.data);
  }

  deteleHairById(id) {
    return api
      .delete("hair/" + id, {
        headers: {
          headers: {
            Accept: "application/json",
          },
        },
      })
      .then((res) => res.true);
  }
}
