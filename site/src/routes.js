import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Estabelecimento from "./pages/estabelecimento/Estabelecimento";
import LoginUsuario from "./pages/loginUsuario/LoginUsuario"
import LoginEmpresa from "./pages/loginEmpresa/LoginEmpresa"
import Footer from "./components/footer/Footer";

function Rotas() {
    return (
        <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/estabelecimento" element={<Estabelecimento />} />
                        <Route path="/login" element={<LoginUsuario/>}/>
                        <Route path="/loginEmpresa" element={<LoginEmpresa/>}/>
                    </Routes>
                </BrowserRouter> 
            <Footer />       
        </>
    )
}
export default Rotas;