import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Estabelecimento from "./pages/estabelecimento/Estabelecimento";
import LoginUsuario from "./pages/loginUsuario/LoginUsuario"


function Rotas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/estabelecimento" element={<Estabelecimento />} />
                    <Route path="/login" element={<LoginUsuario/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Rotas;