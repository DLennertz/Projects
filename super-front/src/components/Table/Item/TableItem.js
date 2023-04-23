import { useState, useEffect } from "react";
import ItemService from "../../../services/ItemService";
import MaterialTable from "material-table";
import "./TableItem.css";

const TableItem = () => {
  const [data, setPower] = useState([]);

  useEffect(() => {
    const itemService = new ItemService();
    itemService.getItem().then((data) => setPower(data));
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <MaterialTable
        title="Basic Search Item"
        columns={[
          { title: "ID", field: "id" },
          { title: "Item", field: "name" }
        ]}
        detailPanel={(rowData) => {
          return rowData.power.map((power) => {
            return <div className="secondary-row">{power.name}</div>;
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

export default TableItem;
