import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home.js";
import Universe from "./pages/Universe/Universe";
import Personagem from "./pages/Personagem/Personagem";
import PersonagemCreate from "./pages/Personagem/PersonagemCreate";
import PersonagemList from "./pages/Personagem/PersonagemList";
import PersonagemDelete from "./pages/Personagem/PersonagemDelete";
import Power from "./pages/Power/Power";
import PowerCreate from "./pages/Power/PowerCreate";
import PowerUpdate from "./pages/Power/PowerUpdate";
import PowerList from "./pages/Power/PowerList";
import PowerDelete from "./pages/Power/PowerDelete";
import Item from "./pages/Item/Item";
import ItemCreate from "./pages/Item/ItemCreate";
import ItemList from "./pages/Item/ItemList";
import ItemUpdate from "./pages/Item/ItemUpdate";
import ItemDelete from "./pages/Item/ItemDelete";
import Hair from "./pages/Hair/Hair";
import Eye from "./pages/Eye/Eye";
import HairList from "./pages/Hair/HairList";
import HairCreate from "./pages/Hair/HairCreate";
import HairDelete from "./pages/Hair/HairDelete";
import HairUpdate from "./pages/Hair/HairUpdate";
import EyeList from "./pages/Eye/EyeList";
import EyeCreate from "./pages/Eye/EyeCreate";
import EyeUpdate from "./pages/Eye/EyeUpdate";
import EyeDelete from "./pages/Eye/EyeDelete";
import UniverseList from "./pages/Universe/UniverseList";
import UniverseCreate from "./pages/Universe/UniverseCreate";
import UniverseUpdate from "./pages/Universe/UniverseUpdate";
import UniverseDelete from "./pages/Universe/UniverseDelete";
import Race from "./pages/Race/Race";
import RaceCreate from "./pages/Race/RaceCreate";
import RaceUpdate from "./pages/Race/RaceUpdate";
import RaceList from "./pages/Race/RaceList";
import PersonagemProfile from "./pages/Personagem/PesonagemProfile";
import PersonagemAddPhotoBatch from "./pages/Personagem/PersonagemAddPhotoBatch";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/universe" element={<Universe />} />
        <Route path="/universe/list" element={<UniverseList />} />
        <Route path="/universe/create" element={<UniverseCreate />} />
        <Route path="/universe/update" element={<UniverseUpdate />} />
        <Route path="/universe/delete" element={<UniverseDelete />} />
        <Route path="/personagem" element={<Personagem />} />
        <Route path="/personagem/:id" element={<PersonagemProfile />} />
        <Route path="/personagem/create" element={<PersonagemCreate />} />
        <Route path="/personagem/list" element={<PersonagemList />} />
        <Route path="/personagem/delete" element={<PersonagemDelete />} />
        <Route
          path="/personagem/addPhotosbatch"
          element={<PersonagemAddPhotoBatch />}
        />
        <Route path="/power" element={<Power />} />
        <Route path="/power/create" element={<PowerCreate />} />
        <Route path="/power/update" element={<PowerUpdate />} />
        <Route path="/power/list" element={<PowerList />} />
        <Route path="/power/delete" element={<PowerDelete />} />
        <Route path="/item" element={<Item />} />
        <Route path="/item/create" element={<ItemCreate />} />
        <Route path="/item/list" element={<ItemList />} />
        <Route path="/item/update" element={<ItemUpdate />} />
        <Route path="/item/delete" element={<ItemDelete />} />
        <Route path="/hair" element={<Hair />} />
        <Route path="/hair/create" element={<HairCreate />} />
        <Route path="/hair/list" element={<HairList />} />
        <Route path="/hair/delete" element={<HairDelete />} />
        <Route path="/hair/update" element={<HairUpdate />} />
        <Route path="/eye" element={<Eye />} />
        <Route path="/eye/list" element={<EyeList />} />
        <Route path="/eye/create" element={<EyeCreate />} />
        <Route path="/eye/update" element={<EyeUpdate />} />
        <Route path="/eye/delete" element={<EyeDelete />} />
        <Route path="/race" element={<Race />} />
        <Route path="/race/create" element={<RaceCreate />} />
        <Route path="/race/update" element={<RaceUpdate />} />
        <Route path="/race/list" element={<RaceList />} />
      </Routes>
    </Router>
  );
}

export default App;
