import './style.css';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import getServices from '../../utils/getServices';
import { useEffect } from 'react';
import useGlobal from '../../hooks/useGlobal';
import arrowBack from '../SignUp/assets/arrowLeft.svg';
import { useNavigate } from 'react-router-dom';

function Results({ nome, areas, categoria }) {
  const { token, services, setServices, category } = useGlobal();
  const navigate = useNavigate();
  useEffect(() => {
    async function getData() {
      const data = await getServices(category, token);
      console.log(data);
      setServices(data);
    }
    getData();
  }, []);

  return (
    <div className='resultados'>
      <div className='titulo1'>
        <button onClick={() => navigate('/home')}>
          <img src={arrowBack} alt='' />
        </button>{' '}
        Mentorias
      </div>
      <div className='conteudo'>
        <h2 className='titulo'> Encontre seu mentor</h2>
        <span>1. Encontre o mentor ideal.</span>
        <span>2. Agende um dia e horário.</span>
        <span>3. Realize o atendimento.</span>
        <h4>Pronto! Simples e grátis.</h4>
      </div>

      <div className='cardes'>
        {services.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
}

export default Results;
