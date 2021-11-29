import "./style.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Welcome() {
  let navigate = useNavigate();

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className="body_welcome"
    >
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
    </motion.div>
  );
}

export default Welcome;
