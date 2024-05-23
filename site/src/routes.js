import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Estabelecimento from "./pages/estabelecimento/Estabelecimento";
import CadastroUsuario from "./pages/cadastro-usuario/CadastroUsuario";
import Dono from "./pages/dono/DonoDeslogado";
import LoginUsuario from "./pages/loginUsuario/LoginUsuario"
import LoginEmpresa from "./pages/loginEmpresa/LoginEmpresa"
import UsuarioFinal from "./pages/usuarioFinal/UsuarioFinal"
import QuemSomos from  "./pages/quemSomos/quemSomos"
import CadastroEmpresa from "./pages/cadastroEmpresa/CadastroEmpresa"
import NotFound from "./pages/notfound/notfound";
function Rotas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/estabelecimento" element={<Estabelecimento />} />
                    <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
                    <Route path="/cadastrar-estabelecimento" element={<Dono/>} />
                    <Route path="/login" element={<LoginUsuario/>}/>
                    <Route path="/loginEmpresa" element={<LoginEmpresa/>}/>
                    <Route path="/usuario-final" element={<UsuarioFinal/>}/>
                    <Route path="/cadastroEmpresa" element={<CadastroEmpresa/>}/>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/quem-somos" element={<QuemSomos/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Rotas;