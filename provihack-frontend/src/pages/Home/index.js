import './style.css'
import { Link, useNavigate } from 'react-router-dom'
import CardHome from '../../components/CardHome'
import CardPartners from '../../components/CardPartners/index'
import theme from './theme1.js'
import { ThemeProvider } from '@material-ui/core'
import { Typography, List, Avatar, Card } from '@mui/material'
import getServices from '../../utils/getServices'
import { useEffect } from 'react'
import useGlobal from '../../hooks/useGlobal'
import { motion } from 'framer-motion'
import homeImage from './assets/homeImage.svg'
import arrowBack from '../SignUp/assets/arrowLeft.svg'
import Button from '../../components/ActionButton/index'
import SecondaryButton from '../../components/ButtonSecondary/index'
import howToBe from '../../assets/how-to-be-a-better-aly.png'
import pride from '../../assets/pride-pronouns.jpg'

function Results({ id, nome, areas, categoria }) {
  useEffect(() => {
    async function getData() {
      const data = await getServices('cursos')
      console.log(data)
    }
    getData()
  }, [])

  const variants = {
    hidden: { opacity: 0.2 },
    visible: { opacity: 1 },
  }

  let navigate = useNavigate()
  const { removeToken, token } = useGlobal()
  console.log(token)

  const handleLogout = () => {
    navigate('/login')
    removeToken()
  }

  return (
    <div className="home">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        className="results"
      >
        <div className="header">
          <img
            src="arrowBack.svg"
            alt="Botão de Retorno"
            onClick={() => handleLogout()}
          />
          Home <Avatar />
        </div>
        <div className="content">
          <h2 className="titulo">Projeto TRANScender</h2>
          <span>
            Rede de apoio a pessoas trans na qualificação para o mercado de
            trabalho.
          </span>
        </div>
        <img className="home-image" src={homeImage} alt="" />
        <p>
          Aqui você pode encontrar serviços de mentoria, cursos, assessoria
          jurídica e apoio psicológico.
        </p>
        <Button>Saiba mais sobre nossas iniciativas!</Button>
        <div className="welcome-title">
          <h2>Legal te ver por aqui! Escolha uma trilha:</h2>
        </div>
        <div className="cards">
          <CardHome titulo="Mentorias" categoria="mentorias" />
          <CardHome titulo="Cursos" categoria="cursos" />
          <CardHome titulo="Apoio Psicológico" categoria="juridico" />
          <CardHome titulo="Acessoria Jurídica" categoria="psicologico" />
        </div>
        <div className="welcome-title">
          <h2>Não andamos sós! Conheça quem anda conosco</h2>
        </div>
        <Link to="/servicos/:id"></Link>
        <div className="cardsPartners">
          <CardPartners
            img={pride}
            title="Cursos Online"
            subtitle="Conheça nossos cursos"
            resume="Programa de incentivo e inclusão para a comunidade LGBTQIA+. Cursos
          profissionalizantes."
          />
          <CardPartners
            img={howToBe}
            title="Vagas positivas para pessoas trans"
            subtitle="Diversos segmentos"
            resume="Oferecemos uma plataforma que reune vagas positivas para o publico trans e te ajuda a montar seu curriculo."
          />
        </div>
        <div className="welcome-title">
          <h2>Algum problema? Nos avise!</h2>
        </div>
        <Button>Reportar problema</Button>
        <SecondaryButton>Preciso de ajuda!  </SecondaryButton>
      </motion.div>
    </div>
  )
}

export default Results
