import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const onLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';

    login('Carlos de las salas');

    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <div className='container mt-5'>
      <h1>Iniciar sesión</h1>
      <hr />

      <button className='btn btn-primary' onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
