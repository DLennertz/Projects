import { useState, useEffect } from "react";
import PersonagemService from "../../../services/PersonagemService";
import MaterialTable from "material-table";
import { Link } from "react-router-dom";

const TablePersonagem = () => {
  const [data, setPersonagem] = useState([]);

  useEffect(() => {
    const personagemService = new PersonagemService();
    personagemService.getPersonagem().then((data) => setPersonagem(data));
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <MaterialTable
        title="Basic Search Personagem"
        columns={[
          { title: "ID", field: "id" },
          {
            field: "url",
            title: "Perfil",
            render: (rowData) => (
              <Link to={`/personagem/${rowData.id}`}>
                <img
                  src={rowData.perfil}
                  style={{ width: 50, borderRadius: "50%" }}
                  alt="Perfil"
                />
              </Link>
            ),
          },
          { title: "Name", field: "name" },
          { title: "Alias", field: "alias" },
          { title: "Tier", field: "tier" },
          { title: "Height", field: "height" },
          { title: "Hair", field: "hairColor.name" },
          { title: "Eyes", field: "eyeColor.name" },
          { title: "Skin", field: "skin.name" },
          { title: "Universe", field: "universe.name" },
        ]}
        data={data}
        options={{
          search: true,
          pageSize: 7,
        }}
      />
    </div>
  );
};

export default TablePersonagem;
