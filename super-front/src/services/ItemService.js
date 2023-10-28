import api from "./api";

export default class ItemService {
  getItem() {
    return api.get("item").then((res) => res.data);
  }

  getItemByid(id) {
    return api.get("item/" + id).then((res) => res.data);
  }

  createItem(item) {
    return api
      .post("item", item, {
        headers: {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      })
      .then((res) => res.data);
  }

  updateItem(item) {
    return api
      .put("item", item, {
        headers: {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      })
      .then((res) => res.data);
  }

  deleteItemById(id) {
    return api
      .delete("item/" + id, {
        headers: {
          headers: {
            Accept: "application/json",
          },
        },
      })
      .then((res) => res.data);
  }
}
