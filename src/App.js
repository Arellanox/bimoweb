import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./pages/home";
import ErrorPage from "./pages/404";
// import Contacto from "./pages/contacto";
import Layout from "./pages/layout";
import Prueba from "./pages/prueba";
import { useState } from "react";
import { lazy } from "react";


import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/contacto";
import Home from "./pages/home";
import Politica from "./pages/politica";
import Radiografia from "./pages/landing-radiografia";
import PageView from "./components/pageView";
import Promociones from "./pages/promociones";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <PageView> */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="privacidad" element={<Politica />} />
          <Route path="quiero-una-radiografia" element={<Radiografia />} />
          <Route path="promociones" element={<Promociones />} />
        </Route>
        <Route path="*" />
        {/* </PageView> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
