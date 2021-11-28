import { useState } from 'react';
import InputMask from 'react-input-mask';
import { Link, useNavigate } from 'react-router-dom';
import arrowLeft from './assets/arrowLeft.svg';
import './style.css';
import userIcon from './assets/user.svg';
import atSign from './assets/at-sign.svg';
import phoneIcon from './assets/phone.svg';
import lockIcon from './assets/lock.svg';
import ActionButton from '../../components/ActionButton';

const SignUp = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.id]: target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('');

    if (response.ok) {
      navigate('');
    }
  };

  return (
    <div className='container-signup'>
      <div className='arrow-and-title'>
        <button className='arrow-left'>
          <img src={arrowLeft} alt='' />
        </button>
        <p>Cadastro de Usuário</p>
      </div>

      <form onSubmit={handleSubmit} action='submit'>
        <div>
          <img className='userIcon' src={userIcon} alt='' />
          <input
            id='name'
            type='text'
            placeholder='Nome Social Completo'
            onChange={(event) => handleChange(event)}
            value={form.name}
          />
        </div>
        <div>
          <img src={atSign} alt='' />
          <input
            id='email'
            type='text'
            placeholder='E-mail'
            onChange={(event) => handleChange(event)}
            value={form.email}
          />
        </div>
        <div>
          <img src={phoneIcon} alt='' />
          <InputMask
            id='phone'
            mask='(99)99999-9999'
            type='text'
            placeholder='Telefone'
            onChange={(event) => handleChange(event)}
            value={form.phone}
          />
        </div>
        <div>
          <img src={lockIcon} alt='' />
          <input
            id='password'
            type='password'
            placeholder='Senha'
            onChange={(event) => handleChange(event)}
            value={form.password}
          />
          <span>Sua senha deve conter no mínimo 5 caracteres</span>
        </div>
        <div>
          <img src={lockIcon} alt='' />
          <input
            id='password'
            type='password'
            placeholder='Confirmar senha'
            onChange={(event) => handleChange(event)}
            value={form.password}
          />
        </div>
        <div />

        <ActionButton>Cadastrar</ActionButton>
      </form>
    </div>
  );
};

export default SignUp;
