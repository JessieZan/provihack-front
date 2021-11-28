import './style.css'
import { Link } from 'react-router-dom'

function Results({ id, nome, instituicao, areas }) {
  return (
    <div className="results">
      <Link to="/servicos/:id">cadastre-se aqui</Link>{' '}
    </div>
  )
}

export default Results
