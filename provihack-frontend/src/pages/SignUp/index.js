import { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';
import ActionButton from '../../components/ActionButton';
import arrowLeft from './assets/arrowLeft.svg';
import atSign from './assets/at-sign.svg';
import lockIcon from './assets/lock.svg';
import phoneIcon from './assets/phone.svg';
import userIcon from './assets/user.svg';
import './style.css';
import errors from './validacao';

const SignUp = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    telefone: '',
  });

  const [confirmSenha, setConfirmSenha] = useState('');

  const [erro, setErro] = useState('');

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.id]: target.value });
  };

  useEffect(() => {
    setErro(errors(form.nome, form.email, form.senha, confirmSenha));
    //eslint-disable-next-line
  }, [form]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `https://api-provihack-equipe05.herokuapp.com/cadastro`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        }
      );

      if (response.ok) {
        navigate('/login');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='container-signup'>
      <div className='arrow-and-title'>
        <button onClick={() => navigate('/login')} className='arrow-left'>
          <img src={arrowLeft} alt='' />
        </button>
        <p>Cadastro de Usuário</p>
      </div>

      <form onSubmit={handleSubmit} action='submit'>
        <div>
          <img className='userIcon' src={userIcon} alt='' />
          <input
            id='nome'
            type='text'
            placeholder='Nome Social Completo'
            onChange={(event) => handleChange(event)}
            value={form.name}
          />
          {erro === 'nome' && <span>Nome é um campo obrigatório.</span>}
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
          {erro === 'email' && <span>Email é um campo obrigatório.</span>}
        </div>
        <div>
          <img src={phoneIcon} alt='' />
          <InputMask
            id='telefone'
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
            id='senha'
            type='password'
            placeholder='Senha'
            onChange={(event) => handleChange(event)}
            value={form.password}
          />
          {erro === 'senha' && (
            <span>
              Senha é um campo obrigatório e deve ter mais que 5 caracteres.
            </span>
          )}
        </div>
        <div>
          <img src={lockIcon} alt='' />
          <input
            id='password'
            type='password'
            placeholder='Confirmar senha'
            onChange={(event) => setConfirmSenha(event.target.value)}
            value={confirmSenha}
          />
          {erro === 'confirm senha' && <span>As senhas não coincidem.</span>}
        </div>
        <div />

        <ActionButton>Cadastrar</ActionButton>
      </form>
    </div>
  );
};

export default SignUp;
