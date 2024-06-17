import React, { useState, useRef, useEffect } from 'react';
import styles from "./Listagem.module.css";
import "../../global.css";
import logo from "../../assets/logoBranca.svg";
import ResultadoBusca from "../../components/resultadoBusca/ResultadoBusca";
import Navbar from '../../components/navbar/NavBar'

function Listagem() {
    const [tamanhoDivExterno, setTamanhoDivExterno] = useState(0);
    const divRef = useRef(null);

    useEffect(() => {
        if (divRef.current) {
            setTamanhoDivExterno(divRef.current.offsetHeight);
        }
    }, []);

    return (
        <>
            <Navbar logoInicio={logo} />
            <section className={styles["sessao"]} id="inicio">
                <div style={{ height: `calc(100vh - ${tamanhoDivExterno}px)` }}>
                    <div className={styles["containerBusca"]} ref={divRef}>
                        <ResultadoBusca />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Listagem;