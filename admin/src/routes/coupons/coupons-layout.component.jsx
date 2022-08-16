import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { Button } from '../../components/button';
import { ButtonsContainer } from './index';
function CouponsLayout(props) {
  return (
    <Fragment>
      <ButtonsContainer>
        <Button>
          <Link to='/'>Criar novo</Link>
        </Button>

        <Button>
          <Link to='/'>Editar</Link>
        </Button>
      </ButtonsContainer>

      <Outlet />
    </Fragment>
  );
}

export default CouponsLayout;
