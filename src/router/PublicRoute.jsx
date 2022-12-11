import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const PublicRoute = ({ children }) => {
  const { logged } = useAuth();

  return !logged ? children : <Navigate to='/marvel' />;
};
