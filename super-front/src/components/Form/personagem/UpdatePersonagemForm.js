import { useFormik } from "formik";
import PersonagemService from "../../../services/PersonagemService";
import Swal from "sweetalert2";
import React, { useState, useEffect } from "react";

const UpdatePersonagemForm = () => {
  const personagemService = new PersonagemService();
  const [id, setId] = useState("");
  const [entity, setEntity] = useState({
    // Add your form fields here
    // For example:
    name: "",
    alias: "",
    hairColor: "",
    eyeColor: "",
    body: "",
    perfil: "",
    height: "",
    skin: "",
    universe: "",
    tier: "",
  });

  useEffect(() => {
    if (id) {
      // Fetch entity from the API based on the provided ID
      personagemService.getPersonagemById(id).then((data) => setEntity(data));
    }
  }, [id]);
  useEffect(() => {
    console.log(entity);
  }, [entity]);
  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setEntity({
      ...entity,
      [name]: value,
    });
  };

  const handleUpdateEntity = (event) => {
    event.preventDefault();

    console.log(entity);
  };

  return (
    <div>
      <h1>Update Entity</h1>
      <form onSubmit={handleUpdateEntity}>
        <label>
          ID:
          <input type="text" value={id} onChange={handleIdChange} />
        </label>

        <h2>Update Form</h2>
        {/* Add your form fields here */}
        {/* For example: */}
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={entity.name}
            onChange={handleFormChange}
          />
        </label>
        <label>
          Alias:
          <input
            type="text"
            name="alias"
            value={entity.alias}
            onChange={handleFormChange}
          />
        </label>
        <label>
          Eye Color:
          <input
            type="text"
            name="eyeColor"
            value={entity.eyeColor.name}
            onChange={handleFormChange}
          />
        </label>
        <label>
          Hair Color:
          <input
            type="text"
            name="eyeColor"
            value={entity.eyeColor.name}
            onChange={handleFormChange}
          />
        </label>
        <label>
          Height:
          <input
            type="text"
            name="height"
            value={entity.height}
            onChange={handleFormChange}
          />
        </label>
        <br />
        <label>
          Skin:
          <input
            type="text"
            name="skin"
            value={entity.skin.name}
            onChange={handleFormChange}
          />
        </label>
        <label>
          Universe:
          <input
            type="text"
            name="universe"
            value={entity.universe.name}
            onChange={handleFormChange}
          />
        </label>
        <label>
          Tier:
          <input
            type="text"
            name="tier"
            value={entity.tier}
            onChange={handleFormChange}
          />
        </label>
        <label>
          Body:
          <input
            type="text"
            name="body"
            value={entity.body}
            onChange={handleFormChange}
          />
        </label>
        <label>
          Perfil:
          <input
            type="text"
            name="perfil"
            value={entity.perfil}
            onChange={handleFormChange}
          />
        </label>

        <button type="submit">Update Entity</button>
      </form>
    </div>
  );
};

export default UpdatePersonagemForm;
