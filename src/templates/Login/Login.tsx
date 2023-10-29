import React from "react";
import Head from "next/head";
import "./Login.css";
import Image from "next/image";
import ciclo from "../../assets/ciclo.jpg";

const Login = () => {
  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <div className="container-login">
        <div className="left">
          <h2>Bons Fluidos</h2>
          <Image src={ciclo} alt="" className="left-img" width={500}/>
        </div>
        <div className="right">
          <div className="card-login">
            <h2>Login</h2>
            <form id="loginForm" method="POST">
              <div className="form-group">
                <label htmlFor="username">Usuário:</label>
                <input type="text" id="username" placeholder="Usuário" name="username" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Senha:</label>
                <input type="password" id="password" placeholder="Senha" name="password" required />
              </div>
              <button className="btn-login" type="submit" value="Entrar">
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
