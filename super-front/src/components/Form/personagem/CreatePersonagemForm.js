import { useState } from "react";
import { useFormik, Formik } from "formik";
import PersonagemService from "../../../services/PersonagemService";
import Swal from "sweetalert2";
import "./CreatePersonagemForm.css";

const CreatePersonagemForm = () => {
  const personagemService = new PersonagemService();
  const [listPower, setListPower] = useState([]);
  const [listItem, setListItem] = useState([]);
  const [listRace, setListRace] = useState([]);
  const [listPhoto, setListPhoto] = useState([]);
  const [name, setName] = useState("");
  const [path, setPath] = useState("");

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangePath(event) {
    setPath(event.target.value);
  }

  function handleAddPower() {
    const newList = listPower.concat({ name });
    setListPower(newList);
    document.getElementById("myForm").reset();
  }

  function handleAddItem() {
    const newList = listItem.concat({ name });
    setListItem(newList);
    document.getElementById("myForm").reset();
  }

  function handleAddRace() {
    const newList = listRace.concat({ name });
    setListRace(newList);
    document.getElementById("myForm").reset();
  }

  function handleAddPhoto() {
    const newList = listPhoto.concat({ path });
    setListPhoto(newList);
    document.getElementById("myForm").reset();
  }

  function handleRemovePower(name) {
    const newList = listPower.filter(function (power) {
      return power.name !== name;
    });
    setListPower(newList);
  }

  function handleRemoveItem(name) {
    const newList = listItem.filter(function (item) {
      return item.name !== name;
    });
    setListItem(newList);
  }

  function handleRemoveRace(name) {
    const newList = listRace.filter(function (race) {
      return race.name !== name;
    });
    setListRace(newList);
  }

  function handleRemovePhoto(path) {
    const newList = listPhoto.filter(function (photo) {
      return photo.path !== path;
    });
    setListPhoto(newList);
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      height: "",
      alias: "",
      body: "",
      perfil: "",
      tier: "",
      hair: "",
      eyes: "",
      universe: "",
      skin: "",
      item: [],
      photos: [],
      power: [],
      race: [],
    },
    onSubmit: (values) => {
      const personagem = {
        name: values.name,
        height: values.height,
        item: listItem,
        power: listPower,
        race: listRace,
        photos: listPhoto,
        alias: values.alias,
        tier: values.tier,
        perfil: values.perfil,
        body: values.body,
        hairColor: {
          name: values.hair,
        },
        eyeColor: {
          name: values.eyes,
        },
        universe: {
          name: values.universe,
        },
        skin: {
          name: values.skin,
        },
      };
      personagemService
        .createPersonagem(personagem)
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
    <div>
      <Formik>
        <form
          id="myForm"
          className="personagem-form"
          onSubmit={formik.handleSubmit}
        >
          <div className="title">
            <h2>Personagem Create</h2>
          </div>

          <div className="fields">
            <div className="field-div">
              <label>Name: </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </div>
            <div className="field-div">
              <label>Alias: </label>
              <input
                id="alias"
                name="alias"
                type="text"
                value={formik.values.alias}
                onChange={formik.handleChange}
              />
            </div>
            <div className="field-div">
              <label>Height: </label>
              <input
                id="height"
                name="height"
                type="number"
                value={formik.values.height}
                onChange={formik.handleChange}
              />
            </div>
            <div className="field-div">
              <label>Skin: </label>
              <input
                id="skin"
                name="skin"
                type="text"
                value={formik.values.skin}
                onChange={formik.handleChange}
              />
            </div>

            <div className="field-div">
              <label>Eyes: </label>
              <input
                id="eyes"
                name="eyes"
                type="text"
                value={formik.values.eyes}
                onChange={formik.handleChange}
              />
            </div>
            <div className="field-div">
              <label>Hair: </label>
              <input
                id="hair"
                name="hair"
                type="text"
                value={formik.values.hair}
                onChange={formik.handleChange}
              />
            </div>
            <div className="field-div">
              <label>Universe: </label>
              <input
                id="universe"
                name="universe"
                type="text"
                value={formik.values.universe}
                onChange={formik.handleChange}
              />
            </div>
            <div className="field-div">
              <label>Tier: </label>
              <input
                id="tier"
                name="tier"
                type="number"
                value={formik.values.tier}
                onChange={formik.handleChange}
              />
            </div>
            <div className="field-div">
              <label>Perfil: </label>
              <input
                id="perfil"
                name="perfil"
                type="text"
                value={formik.values.perfil}
                onChange={formik.handleChange}
              />
            </div>
            <div className="field-div">
              <label>Body: </label>
              <input
                id="body"
                name="body"
                type="text"
                value={formik.values.body}
                onChange={formik.handleChange}
              />
            </div>
          </div>

          <div className="list">
            <div className="content-div">
              <div>
                <label>Item: </label>
                <input type="text" onChange={handleChangeName} />
                <button type="button" onClick={handleAddItem}>
                  ADD
                </button>
              </div>
              <ul>
                {listItem.map((item) => {
                  return (
                    <li key={item.id}>
                      {item.name}{" "}
                      <button
                        type="button"
                        onClick={() => handleRemoveItem(item.name)}
                      >
                        REMOVE
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="content-div">
              <div>
                <label>Power: </label>
                <input type="text" onChange={handleChangeName} />
                <button type="button" onClick={handleAddPower}>
                  ADD
                </button>
              </div>
              <ul>
                {listPower.map((item) => {
                  return (
                    <li key={item.id}>
                      {item.name}{" "}
                      <button
                        type="button"
                        onClick={() => handleRemovePower(item.name)}
                      >
                        REMOVE
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="content-div">
              <div>
                <label>Race: </label>
                <input type="text" onChange={handleChangeName} />
                <button type="button" onClick={handleAddRace}>
                  ADD
                </button>
              </div>
              <ul>
                {listRace.map((item) => {
                  return (
                    <li key={item.id}>
                      {item.name}{" "}
                      <button
                        type="button"
                        onClick={() => handleRemoveRace(item.name)}
                      >
                        REMOVE
                      </button>
                    </li>
                  );
                })}
              </ul>
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
      </Formik>
    </div>
  );
};

export default CreatePersonagemForm;
