const errors = (nome, email, senha, confirmarSenha) => {
  if (!nome) {
    return 'nome';
  }
  if (!email) {
    return 'email';
  }
  if (!senha) {
    return 'senha';
  }
  if (confirmarSenha !== senha) {
    return 'confirm senha';
  }
  return false;
};
export default errors;
