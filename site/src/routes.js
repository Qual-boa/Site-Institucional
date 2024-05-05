import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Estabelecimento from "./pages/estabelecimento/Estabelecimento";
import CadastroUsuario from "./pages/cadastro-usuario/CadastroUsuario";
import LoginUsuario from "./pages/loginUsuario/LoginUsuario"
import LoginEmpresa from "./pages/loginEmpresa/LoginEmpresa"
import QuemSomos from  "./pages/quemSomos/quemSomos"

function Rotas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/estabelecimento" element={<Estabelecimento />} />
                    <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
                    <Route path="/login" element={<LoginUsuario/>}/>
                    <Route path="/loginEmpresa" element={<LoginEmpresa/>}/>
                    <Route path="/quem-somos" element={<QuemSomos/>}/>
                </Routes>
            </BrowserRouter> 
        </>
    )
}
export default Rotas;