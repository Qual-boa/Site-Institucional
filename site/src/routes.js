import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Estabelecimento from "./pages/estabelecimento/Estabelecimento";
import LoginUsuario from "./pages/loginUsuario/LoginUsuario"
import LoginEmpresa from "./pages/loginEmpresa/LoginEmpresa"
import UsuarioFinal from "./pages/usuarioFinal/UsuarioFinal"

function Rotas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/estabelecimento" element={<Estabelecimento />} />
                    <Route path="/login" element={<LoginUsuario/>}/>
                    <Route path="/loginEmpresa" element={<LoginEmpresa/>}/>
                    <Route path="/UsuarioFinal" element={<UsuarioFinal/>}/>

                </Routes>
            </BrowserRouter> 
        </>
    )
}
export default Rotas;