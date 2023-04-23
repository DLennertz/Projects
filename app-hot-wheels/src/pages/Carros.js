import React, { useState, useEffect } from "react";
import Header from "../components/header/header";
import SubMenu from "../components/SubMenu/SubMenu";
import Pagination from "../components/Pagination/Pagination";
import CardModel from "../components/Cards/CardModel/CardModel";
import CarrosService from "../services/CarrosService";
import "./Modelo.css";

const Carros = () => {
  const [data, setModelos] = useState([]);
  const [totalRegistros, setTotalRegistros] = useState(0);
  const [page, setPage] = useState(1);
  const [qtdRegistros, setQtdRegistros] = useState(8);
  const carrosService = new CarrosService();

  useEffect(() => {
    carrosService
      .getModelo(page - 1, qtdRegistros)
      .then((data) => setModelos(data));
      carrosService.getTotal().then((data) => setTotalRegistros(data));
  }, [page]);

  const paginate = (pageNumber) => setPage(pageNumber);
  const nextPage = () => {
    if (page === Math.ceil(totalRegistros / qtdRegistros)) {
    } else {
      setPage(page + 1);
    }
  };
  const prevPage = () => {
    if (page === 1) {
    } else {
      setPage(page - 1);
    }
  };

  return (
    <>
      <Header />
      <div id="container">
        <SubMenu />
        <div className="campo">
          <Pagination
            qtdRegistros={qtdRegistros}
            totalRegistros={totalRegistros}
            page={page}
            paginate={paginate}
            nextPage={nextPage}
            prevPage={prevPage}
          />
          <div className="wrapper">
            {data.map((item) => (
              <CardModel className="CardModel" props={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carros;
