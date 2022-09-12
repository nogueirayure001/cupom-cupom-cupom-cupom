import { Fragment } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectUser } from '../../store/auth';

function ProtectRoute({ children }) {
  const user = useSelector(selectUser);

  if (!user) return <Navigate to='/admin/login' />;

  return <Fragment>{children}</Fragment>;
}

export default ProtectRoute;
