import "./style.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Typography, TextField, InputAdornment } from "@mui/material";
import ActionButton from "../../components/ActionButton";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useEffect, useState } from "react";

function Login() {
  const variants = {
    hidden: { opacity: 0.2 },
    visible: { opacity: 1 },
  };

  const [loginValues, setLoginValues] = useState({ email: "", senha: "" });
  const [validError, setValidError] = useState(false);
  const [textError, setTextError] = useState("");

  useEffect(() => {
    if (loginValues.email || loginValues.senha) {
      setTextError("");
      return setValidError(false);
    }
  }, [loginValues.email, loginValues.senha]);

  const handleValues = (e) => {
    setLoginValues({ ...loginValues, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!loginValues.email || !loginValues.senha) {
      setTextError("Campos Obrigatórios");
      return setValidError(true);
    }

    try {
      const response = await fetch(
        "https://api-provihack-equipe05.herokuapp.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginValues),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setValidError(true);
        setTextError(data);
      } else {
        console.log(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className="login"
    >
      <form action="" className="form_login">
        <Typography variant="h5">Bem vinde ao projeto transcender</Typography>
        <Typography variant="h6">Login</Typography>
        <TextField
          name="email"
          value={loginValues.email}
          onChange={(e) => handleValues(e)}
          error={validError}
          helperText={textError}
          sx={{ mb: "10px" }}
          id="input-with-icon-textfield"
          label="Usuário"
          placeholder="E-mail"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AlternateEmailIcon color="primary" />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          multiline
        />
        <TextField
          name="senha"
          value={loginValues.senha}
          onChange={(e) => handleValues(e)}
          error={validError}
          helperText={textError}
          type="password"
          sx={{ mb: "11px" }}
          id="input-with-icon-textfield"
          label="Senha"
          placeholder="Senha"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlinedIcon color="primary" />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          multiline
        />

        <a href="/">Esqueci meu e-mail/senha</a>
        <Link to="/signup">Ainda não possuo cadastro</Link>

        <ActionButton onClick={handleLogin}>Entrar</ActionButton>
      </form>
      <div className="footer">
        <Link to="/signup">SOBRE NÓS</Link>
        <a href="/">Como posso contribuir com o projeto?</a>
      </div>
    </motion.div>
  );
}

export default Login;
