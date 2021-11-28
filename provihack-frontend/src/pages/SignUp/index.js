import { useState } from 'react';
import InputMask from 'react-input-mask';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';

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
      <h1>Cadastre-se</h1>
      <form onSubmit={handleSubmit} action='submit'>
        <input
          id='name'
          type='text'
          placeholder='Nome'
          onChange={(event) => handleChange(event)}
          value={form.name}
        />

        <input
          id='email'
          type='text'
          placeholder='E-mail'
          onChange={(event) => handleChange(event)}
          value={form.email}
        />

        <input
          id='password'
          type='password'
          placeholder='Senha'
          onChange={(event) => handleChange(event)}
          value={form.password}
        />

        <InputMask
          id='phone'
          mask='(99)99999-9999'
          type='text'
          placeholder='Telefone'
          onChange={(event) => handleChange(event)}
          value={form.phone}
        />

        <button className='btn-signup'>Cadastrar</button>
        <span>Já tem cadastro?</span>
        <Link to='/login'>Clique aqui!</Link>
      </form>
    </div>
  );
};

export default SignUp;
