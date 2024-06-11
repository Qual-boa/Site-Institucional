// import React, { useEffect, useState } from 'react';
// import styles from './Forms.module.css';
// import api from "../../api";
// import { toast } from 'react-toastify';
// import { useNavigate } from "react-router-dom";
// import jwtDecode from "jwt-decode";

// function EditarUsuarios({ closeModal }) {
//     const navigate = useNavigate();
//     const [nome, setNome] = useState("");
//     const [email, setEmail] = useState("");
//     const [senha, setSenha] = useState("");
//     const [senhaConfirmacao, setSenhaConfirmacao] = useState("");

//     useEffect(() => {
//         const token = sessionStorage.getItem("jwt");
//         if (token) {
//             try {
//                 const decoded = jwtDecode(token);
//                 console.log("Decoded JWT: ", decoded);
//                 if (decoded.name) setNome(decoded.name);
//                 if (decoded.email) setEmail(decoded.email);
//             } catch (error) {
//                 console.error("Invalid token", error);
//             }
//         }
//     }, []);

//     const salvarUsuario = (evento) => {
//         evento.preventDefault();

//         if (senha !== senhaConfirmacao) {
//             toast.error("As senhas não coincidem.");
//             return;
//         }

//         api.post("/users/register", {
//             name: nome,
//             email,
//             password: senha,
//             userTypeEnum: "EMPLOYEE",
//             roleEnum: "ADMIN"
//         }).then(() => {
//             toast.success("Novo Usuário cadastrado com sucesso!");
//             navigate("/login");
//         }).catch(() => {
//             toast.error("Ocorreu um erro ao salvar os dados, por favor, tente novamente.")
//         });
//     }

//     const setarValoresInput = (evento, setState) => {
//         setState(evento.target.value);
//     }

//     return (
//         <div className={styles.form}>
//             <img src={require('../../assets/asset-cadastro-usuario/avatar.svg').default} alt="User Icon" className={styles.userIcon} />
//             <h2 id="editar-usuarios-form">EDITAR USUÁRIOS</h2>
//             <form aria-labelledby="editar-usuarios-form" onSubmit={salvarUsuario}>
//                 <label htmlFor="name">NOME:</label>
//                 <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     placeholder={nome || "Nome"}
//                     aria-required="true"
//                     value={nome}
//                     onChange={(e) => setarValoresInput(e, setNome)}
//                 />
//                 <label htmlFor="email">E-MAIL:</label>
//                 <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     placeholder={email || "Email"}
//                     aria-required="true"
//                     value={email}
//                     onChange={(e) => setarValoresInput(e, setEmail)}
//                 />
//                 <label htmlFor="password">SENHA:</label>
//                 <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     placeholder="********"
//                     aria-required="true"
//                     value={senha}
//                     onChange={(e) => setarValoresInput(e, setSenha)}
//                 />
//                 <label htmlFor="password-confirmacao">SENHA NOVAMENTE:</label>
//                 <input
//                     type="password"
//                     id="password-confirmacao"
//                     name="password-confirmacao"
//                     placeholder="********"
//                     aria-required="true"
//                     value={senhaConfirmacao}
//                     onChange={(e) => setarValoresInput(e, setSenhaConfirmacao)}
//                 />
//                 <div className={styles.formButtons}>
//                     <button type="button" onClick={closeModal} aria-label="Cancelar">CANCELAR</button>
//                     <button type="submit" aria-label="Salvar usuário">SALVAR</button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default EditarUsuarios;
