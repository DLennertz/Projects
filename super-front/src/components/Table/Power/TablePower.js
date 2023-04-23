import { useState, useEffect } from "react";
import PowerService from "../../../services/PowerService";
import MaterialTable from "material-table";

const TablePower = () => {
  const [data, setPower] = useState([]);

  useEffect(() => {
    const powerService = new PowerService();
    powerService.getPower().then((data) => setPower(data));
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <MaterialTable
        title="Basic Search Power"
        columns={[
          { title: "ID", field: "id" },
          { title: "Power", field: "name" }
        ]}
        data={data}
        options={{
          search: true,
          pageSize: 10
        }}
      />
    </div>
  );
};

export default TablePower;
