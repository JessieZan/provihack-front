import './style.css'
import { Link } from 'react-router-dom'
import CardHome from '../../components/CardHome'
import theme from './theme1.js'
import { ThemeProvider } from '@material-ui/core'
import { Typography, List, Avatar } from '@mui/material'
import getServices from '../../utils/getServices'
import { useEffect } from 'react'

function Results({ id, nome, areas, categoria }) {
  useEffect(() => {
    async function getData() {
      const data = await getServices('cursos')
      console.log(data)
    }
    getData()
  }, [])

  return (
    <div className="results">
      <ThemeProvider theme={theme}>
        <div className="header">
          <img src="arrowBack.svg" />
          Home <Avatar />
        </div>
        <div className="content">
          <h2 className="titulo">Projeto TRANScender</h2>
          <span>
            Rede de apoio a pessoas trans na capacitação para o mercado de
            trabalho.
          </span>
        </div>
        <div className="cards">
          <CardHome titulo="Mentorias" categoria="mentorias" />
          <CardHome titulo="Cursos" categoria="cursos" />
          <CardHome titulo="Apoio Psicológico" categoria="juridico" />
          <CardHome titulo="Acessoria Jurídica" categoria="psicologico" />
        </div>

        <Link to="/servicos/:id"></Link>
      </ThemeProvider>
    </div>
  )
}

export default Results
