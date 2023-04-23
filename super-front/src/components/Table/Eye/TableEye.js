import { useState, useEffect } from "react";
import EyeService from "../../../services/EyeService";
import MaterialTable from "material-table";

const TableEye = () => {
  const [data, setEye] = useState([]);

  useEffect(() => {
    const eyeService = new EyeService();
    eyeService.getEye().then((data) => setEye(data));
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <MaterialTable
        title="Basic Search Eye"
        columns={[
          { title: "ID", field: "id" },
          { title: "Hair", field: "name" }
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
export default TableEye;
