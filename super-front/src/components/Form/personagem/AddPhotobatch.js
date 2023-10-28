import { useState } from "react";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import "./CreatePersonagemForm.css";
import PhotoService from "../../../services/PhotoService";

const AddPhotoBatch = () => {
  var formData = new FormData();
  const photoService = new PhotoService();

  const [listPhoto, setListPhoto] = useState([]);
  const [id, setId] = useState("");
  const [path, setPath] = useState("");

  function handleChangePath(event) {
    setPath(event.target.value);
  }

  function handleChangeId(event) {
    setId(event.target.value);
  }

  function handleAddPhoto() {
    const newList = listPhoto.concat({ path });
    setListPhoto(newList);
  }

  function handleRemovePhoto(path) {
    const newList = listPhoto.filter(function (photo) {
      return photo.path !== path;
    });
    setListPhoto(newList);
  }

  const formik = useFormik({
    initialValues: {
      photos: [],
    },
    onSubmit: (values) => {
      const photos = {
        photos: listPhoto,
      };

      const jsonData = JSON.stringify(photos);
      const newPhotos = new Blob([jsonData], {
        type: "application/json",
      });

      formData.append("photos", newPhotos);

      photoService
        .addPhotoBatch(formData, id)
        .then(() => {
          new Swal({
            title: "",
            text: "Registro feito com sucesso",
            icon: "success",
            buttons: ["NO", "YES"],
          }).then(function (isConfirm) {
            if (isConfirm) {
              window.location.reload();
            } else {
            }
          });
        })
        .catch((error) => new Swal("", error, "error"));
    },
  });

  return (
    <form className="personagem-form" onSubmit={formik.handleSubmit}>
      <div className="title">
        <h2>Personagem Create</h2>
      </div>

      <div className="fields">
        <div className="field-div">
          <label>ID: </label>
          <input id="id" name="id" type="text" onChange={handleChangeId} />
        </div>

        <div className="content-div">
          <div>
            <label>Photos: </label>
            <input type="text" onChange={handleChangePath} />
            <button type="button" onClick={handleAddPhoto}>
              ADD
            </button>
          </div>
          <ul>
            {listPhoto.map((item) => {
              return (
                <li key={item.id}>
                  {item.path}{" "}
                  <button
                    type="button"
                    onClick={() => handleRemovePhoto(item.path)}
                  >
                    REMOVE
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddPhotoBatch;
