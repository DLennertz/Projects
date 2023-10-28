import api from "./api";

export default class RaceService {
  getRace() {
    return api.get("race").then((res) => res.data);
  }

  getraceById(id) {
    return api.get("race/" + id).then((res) => res.data);
  }

  createRace(race) {
    return api
      .post("race", race, {
        headers: {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      })
      .then((res) => res.data);
  }

  updateRace(race) {
    return api
      .put("race", race, {
        headers: {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      })
      .then((res) => res.data);
  }

  deleteRaceById(id) {
    return api
      .delete("race/" + id, {
        headers: {
          headers: {
            Accept: "application/json",
          },
        },
      })
      .then((res) => res.data);
  }
}
