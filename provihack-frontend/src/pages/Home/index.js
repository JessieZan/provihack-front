import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import CardHome from '../../components/CardHome';
import theme from './theme1.js';
import { ThemeProvider } from '@material-ui/core';
import { Typography, List, Avatar } from '@mui/material';
import getServices from '../../utils/getServices';
import { useEffect } from 'react';
import useGlobal from '../../hooks/useGlobal';
import { motion } from 'framer-motion';
import homeImage from './assets/homeImage.svg';
import arrowBack from '../SignUp/assets/arrowLeft.svg';

function Results({ id, nome, areas, categoria }) {
  useEffect(() => {
    async function getData() {
      const data = await getServices('cursos');
      console.log(data);
    }
    getData();
  }, []);

  const variants = {
    hidden: { opacity: 0.2 },
    visible: { opacity: 1 },
  };

  let navigate = useNavigate();
  const { removeToken, token } = useGlobal();
  console.log(token);

  const handleLogout = () => {
    navigate('/login');
    removeToken();
  };

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={variants}
      className='results'>
      <ThemeProvider theme={theme}>
        <div className='header'>
          <img
            src='arrowBack.svg'
            alt='Botão de Retorno'
            onClick={() => handleLogout()}
          />
          Home <Avatar />
        </div>
        <div className='content'>
          <h2 className='titulo'>Projeto TRANScender</h2>
          <span>
            Rede de apoio a pessoas trans na qualificação para o mercado de
            trabalho.
          </span>
        </div>
        <img className='home-image' src={homeImage} alt='' />
        <p>
          Aqui você pode encontrar serviços de mentoria, cursos, assessoria
          jurídica e apoio psicológico.
        </p>
        <div className='welcome-title'>
          <h2>Legal te ver por aqui! Escolha uma trilha:</h2>
        </div>
        <div className='cards'>
          <CardHome titulo='Mentorias' categoria='mentorias' />
          <CardHome titulo='Cursos' categoria='cursos' />
          <CardHome titulo='Apoio Psicológico' categoria='juridico' />
          <CardHome titulo='Acessoria Jurídica' categoria='psicologico' />
        </div>

        <Link to='/servicos/:id'></Link>
      </ThemeProvider>
    </motion.div>
  );
}

export default Results;
