import { useState, useEffect } from "react";
import UniverseService from "../../../services/UniverseService";
import MaterialTable from "material-table";

const TableUniverse = () => {
  const [data, setUniverse] = useState([]);

  useEffect(() => {
    const universeService = new UniverseService();
    universeService.getUniverse().then((data) => setUniverse(data));
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <MaterialTable
        title="Basic Search Universe"
        columns={[
          { title: "ID", field: "id" },
          { title: "Universe", field: "name" }
        ]}
        data={data}
        options={{
          search: false,
          pageSize: 10,
          grouping: true
        }}
      />
    </div>
  );
};
export default TableUniverse;
