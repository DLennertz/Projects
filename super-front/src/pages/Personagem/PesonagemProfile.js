import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import PersonagemService from "../../services/PersonagemService";
import MainHeader from "../../components/Header/MainHeader/MainHeader";
import SubMenuPersonagem from "../../components/Menu/SubMenu/SubMenuPersonagem/SubMenuPersonagem";
import { motion } from "framer-motion";
import "../../styles/carousel/carousel.css";

const TablePersonagem = () => {
  const [char, setPersonagem] = useState(0);
  const { id } = useParams();
  const carousel = useRef();
  const [width, setWidth] = useState(0);
  const photos = [];

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  });

  useEffect(() => {
    const personagemService = new PersonagemService();
    personagemService.getPersonagemById(id).then((data) => {
      setPersonagem(data);
    });
  }, []);

  photos.push(char.body, char.perfil);

  return !char ? null : (
    <div className="app">
      <MainHeader />
      <div className="MainContent">
        <SubMenuPersonagem className="SideMenu" />

        <motion.div
          ref={carousel}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="inner"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {photos.map((image) => {
              return (
                <motion.div className="item" key={image}>
                  <img src={image} alt="perfil" />
                </motion.div>
              );
            })}
            {char.photos.map((image) => {
              return (
                <motion.div className="item" key={image.path}>
                  <img src={image.path} alt="perfil" />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TablePersonagem;
