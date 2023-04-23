import api from "./api";

export default class PhotoService {
  addPhotoBatch(photos, id) {
    return api
      .post("photo/" + id, photos, {
        headers: {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        },
      })
      .then((res) => res.data);
  }
}
