import './style.css'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import theme from './theme1.js'
import { ThemeProvider } from '@material-ui/core'
import { Typography, List } from '@mui/material'
import getServices from '../../utils/getServices'
import { useEffect } from 'react'
import useGlobal from '../../hooks/useGlobal'

function Results({ id, nome, areas, categoria }) {
  const { token, services, setServices } = useGlobal()

  useEffect(() => {
    async function getData() {
      const data = await getServices('cursos')
      console.log(data)
      setServices(data)
    }
    getData()
  }, [])

  return (
    <div className="results">
      <ThemeProvider theme={theme}>
        <div>{categoria}Mentorias</div>
        <div className="content" variant="h5" component="div">
          <h2 className="titulo"> Encontre seu mentor</h2>
          <span>1. Encontre o mentor ideal.</span>
          <span>2. Agende um dia e horário.</span>
          <span>3. Realize o atendimento.</span>
          <h4>Pronto! Simples e grátis.</h4>
        </div>

        <Link to="/servicos/:id">
          {services.map((item) => (
            <Card item={item} />
          ))}
        </Link>
      </ThemeProvider>
    </div>
  )
}

export default Results
