import "./style.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Typography, TextField, InputAdornment } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function Login() {
  const variants = {
    hidden: { opacity: 0.2 },
    visible: { opacity: 1 },
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
          id="input-with-icon-textfield"
          label="Usuário"
          placeholder="E-mail"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AlternateEmailIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          multiline
        />
        <TextField
          id="input-with-icon-textfield"
          label="Senha"
          placeholder="Senha"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlinedIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          multiline
        />

        <a href="#">Esqueci meu e-mail/senha</a>
        <Link to="/signup">Ainda não possuo cadastro</Link>
      </form>
      <span>Como posso contribuir com o projeto?</span>
    </motion.div>
  );
}

export default Login;
