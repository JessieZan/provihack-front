import './style.css'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import theme from './theme1.js'
import { ThemeProvider } from '@material-ui/core'
import { Typography, List } from '@mui/material'

function Results({ id, nome, areas, categoria }) {
  return (
    <div className="results">
      <div className="header">{categoria}Mentorias</div>
      <ThemeProvider theme={theme}>
        <div className="content">
          <h2 className="titulo"> Encontre seu Mentor</h2>
          <span>1. Encontre o mentor ideal.</span>
          <span>2. Agende um dia e horário.</span>
          <span>3. Realize o atendimento.</span>
          <span>Pronto! Simples e grátis.</span>
        </div>
        <div className="cards">

        </div>

        <Link to="/servicos/:id">
          <Card />
        </Link>
      </ThemeProvider>
    </div>
  )
}

export default Results
