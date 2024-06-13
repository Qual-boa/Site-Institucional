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
<<<<<<< HEAD
import EstabelecimentoUsuario from "./pages/estabelecimento-usuario/estabelecimentoUsuario";
=======
import Dashboard from "./pages/dashboard/Dashboard"
import AdicionarUsuarios from './pages/formsDashboard/AdicionarUsuarios';
import EditarUsuarios from './pages/formsDashboard/EditarUsuarios';


>>>>>>> e9e245c75cefad29a17a58bad684f08e240c746d
function Rotas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/estabelecimento" element={<Estabelecimento />} />
                    <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
                    <Route path="/dono" element={<Dono />} />
                    <Route path="/login" element={<LoginUsuario/>}/>
                    <Route path="/loginEmpresa" element={<LoginEmpresa/>}/>
                    <Route path="/usuario-final" element={<UsuarioFinal/>}/>
                    <Route path="/cadastroEmpresa" element={<CadastroEmpresa/>}/>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/quem-somos" element={<QuemSomos/>}/>
                    <Route path="/estabelecimento-usuario" element={<EstabelecimentoUsuario/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/usuarios/adicionarUsuarios" element={<AdicionarUsuarios />} />
                    <Route path="/usuarios/editarUsuarios" element={<EditarUsuarios />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Rotas;