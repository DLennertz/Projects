import React, { useState, useEffect } from "react";
import CarrosService from "../../services/CarrosService";
import MaterialTable from "material-table";
import "./tableModelo.css";

<MaterialTable
  // other props
  options={{
    search: true,
  }}
/>;

const TableModelo = () => {
  const [data, setModelos] = useState([]);
  const carrosService = new CarrosService();

  useEffect(() => {
    carrosService.getModelo().then((data) => setModelos(data));
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <MaterialTable
        title="Basic Search Preview"
        columns={[
          { title: "ID", field: "carroID" },
          { title: "Nome", field: "carroNome" },
          { title: "Position", field: "carroCor" },
          { title: "País", field: "carroAno" },
          { title: "Nascimento", field: "dataNascimento" },
          { title: "imagem", field: "foto", render: rowData => <img src={`${rowData.carroFoto}`} alt="" border="3" height="100" width="100" />}
        ]}
        data={data}
        detailPanel={(rowData) => {
          return (
            <div>
              <table className="subTabela">
                <tr>
                  <th>Height</th>
                  <th>Bust</th>
                  <th>Waist</th>
                  <th>Hips</th>
                  <th>Eyes</th>
                  <th>Hair</th>
                  <th>Boys</th>
                  <th>Girls</th>
                </tr>
                <tr>
                  <td>{rowData.height}</td>
                  <td>{rowData.bust}</td>
                  <td>{rowData.waist}</td>
                  <td>{rowData.hips}</td>
                  <td>{rowData.eyeColor}</td>
                  <td>{rowData.hairColor}</td>
                  <td>{rowData.boys}</td>
                  <td>{rowData.girls}</td>
                </tr>
              </table>
            </div>
          );
        }}
        options={{
          search: true,
          pageSize:20,
        }}
      />
    </div>
  );
};

export default TableModelo;
