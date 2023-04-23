import { useState, useEffect } from "react";
import RaceService from "../../../services/RaceService";
import MaterialTable from "material-table";

const TableRace = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const raceService = new RaceService();
    raceService.getRace().then((data) => setData(data));
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <MaterialTable
        title="Basic Search Race"
        columns={[
          { title: "ID", field: "id" },
          { title: "Race", field: "name" }
        ]}
        detailPanel={(rowData) => {
          return rowData.power.map((power) => {
            return <li className="secondary-row">{power.name}</li>;
          });
        }}
        data={data}
        options={{
          search: true,
          pageSize: 10
        }}
      />
    </div>
  );
};

export default TableRace;
