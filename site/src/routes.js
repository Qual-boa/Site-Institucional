import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Estabelecimento from "./pages/estabelecimento/Estabelecimento";
import CadastroUsuario from "./pages/cadastro-usuario/CadastroUsuario";
import Dono from "./pages/dono/DonoDeslogado";
import LoginUsuario from "./pages/loginUsuario/LoginUsuario"
import LoginEmpresa from "./pages/loginEmpresa/LoginEmpresa"
import UsuarioFinal from "./pages/usuarioFinal/UsuarioFinal"
import QuemSomos from  "./pages/quemSomos/quemSomos"

function Rotas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/estabelecimento" element={<Estabelecimento />} />
                    <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
                    <Route path="/cadastrar-estabelecimento" element={<Dono />} />
                    <Route path="/login" element={<LoginUsuario/>}/>
                    <Route path="/loginEmpresa" element={<LoginEmpresa/>}/>
                    <Route path="/UsuarioFinal" element={<UsuarioFinal/>}/>

                    <Route path="/quem-somos" element={<QuemSomos/>}/>
                </Routes>
            </BrowserRouter> 
        </>
    )
}
export default Rotas;