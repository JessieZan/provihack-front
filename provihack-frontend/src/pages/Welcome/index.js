import "./style.css";
import { useNavigate } from "react-router-dom";

function Welcome() {
  let navigate = useNavigate();

  return (
    <div className="body_welcome">
      <header className="header-welcome">Algo aqui</header>

      <div className="principal">
        <div className="message_welcome">Mensagem Boas Vindas</div>
        <div className="btn-sign">
          <button className="btn-signin" onClick={() => navigate("login")}>
            Login
          </button>

          <button className="btn-signup">Cadastrar-se</button>
        </div>
      </div>

      <footer className="footer-welcome">botão para empresa</footer>
    </div>
  );
}

export default Welcome;
