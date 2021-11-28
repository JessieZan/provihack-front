import "./style.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import setinhaVoltar from "../../assets/setinhaVoltar.svg";
import imagemAbraço from "../../assets/imagemAbraço.svg";
import ActionButton from "../../components/ActionButton";

function SobreNos() {
  let navigate = useNavigate();
  const variants = {
    hidden: { opacity: 0.2 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className="body_sobreNos"
    >
      <header className="header-sobreNos">
        <img
          src={setinhaVoltar}
          className="btn-voltar"
          alt="setinha para voltar para pafina inicial"
          onClick={() => navigate("/")}
        />
        <h1 className>Sobre Nós</h1>
        <div></div>
      </header>

      <div className="container">
        <div className="container-info">
          <h1> Projeto TRANScender</h1>
          <img src={imagemAbraço} alt="pessoas se abraçando" />
          <h2> Quem somos nós? </h2>
          <p>
            Nós somos uma plataforma de acolhimento e qualificação de pessoas
            trans, temos o objetivo de ajudá-las a ingressarem no mercado de
            trabalho. Contamos com apoio psicológico, jurídico, mentoria com
            profissionais da área de Recursos humanos, e curso
            profissionalizantes!
          </p>
        </div>
        <div className="btn-cadastrar">
          <ActionButton onClick={() => navigate("/signup")}>
            {" "}
            Se cadastre clicando aqui{" "}
          </ActionButton>
        </div>
      </div>
    </motion.div>
  );
}

export default SobreNos;
