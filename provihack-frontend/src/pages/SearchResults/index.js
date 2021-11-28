import './style.css'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import theme from './theme1.js'
import { ThemeProvider } from '@material-ui/core'
import { Typography, List } from '@mui/material'

function Results({ id, nome, areas, categoria }) {
  return (
    <div className="results">
      <ThemeProvider theme={theme}>
        <Typography className="header" variant="h5" component="div">
          <h2 className="titulo"> Encontre seu mentor</h2>
          <ul>
            <li>Encontre o {categoria} ideal.</li>
            <li>Agende um dia e horário.</li>
            <li>Realize o atendimento.</li>
          </ul>
          <h4>Pronto! Simples e grátis.</h4>
        </Typography>

        <Link to="/servicos/:id">
          <Card />
        </Link>
      </ThemeProvider>
    </div>
  )
}

export default Results
