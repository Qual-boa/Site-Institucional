import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Estabelecimento from "./pages/estabelecimento/Estabelecimento";
import Dono from "./pages/dono/Dono";


function Rotas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/estabelecimento" element={<Estabelecimento />} />
                    <Route path="/cadastrar-estabelecimento" element={<Dono />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Rotas;