import "./style.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div className="title-login">
        <span>Bem vindo</span>
        <h3>Faça o Login com sua conta</h3>
      </div>

      <div className="inputs-login">
        <label htmlFor="">
          E-mail
          <input type="text" name="" id="" />
        </label>
        <label htmlFor="">
          Senha
          <input type="text" name="" id="" />
        </label>
      </div>

      <button className="btn_login">Login</button>

      <span>
        Caso não tenha cadastro, <Link to="/">cadastre-se aqui</Link>{" "}
      </span>
    </div>
  );
}

export default Login;
