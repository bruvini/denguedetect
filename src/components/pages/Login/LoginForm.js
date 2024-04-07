import React, { useState } from 'react';
import InputField from '../../common/InputField';
import Button from '../../common/Button';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="logos-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
        <img src="/denguedetect.png" alt="Dengue Detect Logo" style={{ maxWidth: '100px', height: 'auto' }} />
        <img src="/logounimed.jpg" alt="Unimed Logo" style={{ maxWidth: '100px', height: 'auto' }} />
      </div>
      <h2>Login</h2>
      <p className="sub-title">Acessando ao Dengue Detect</p>
      <InputField placeholder="Nome de Usuário" type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} />
      <InputField placeholder="Senha" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
      <a href="/forgot-password" className="forgot-password-link">Esqueceu a senha?</a>
      <Button text="Acessar o Dengue Detect" />
    </form>
  );
};


export default LoginForm;
