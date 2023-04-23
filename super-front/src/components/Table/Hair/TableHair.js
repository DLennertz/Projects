import { useState, useEffect } from "react";
import HairService from "../../../services/HairService";
import MaterialTable from "material-table";

const TableHair = () => {
  const [data, setHair] = useState([]);

  useEffect(() => {
    const hairService = new HairService();
    hairService.getHair().then((data) => setHair(data));
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <MaterialTable
        title="Basic Search Hair"
        columns={[
          { title: "ID", field: "id" },
          { title: "Eye", field: "name" }
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
export default TableHair;
