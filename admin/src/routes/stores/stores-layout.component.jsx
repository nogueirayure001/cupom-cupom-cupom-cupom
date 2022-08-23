import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { Button } from '../../components/button';
import { ButtonsContainer } from './index';

function StoresLayout(props) {
  return (
    <Fragment>
      <ButtonsContainer>
        <Button>
          <Link to='./'>Adicionar</Link>
        </Button>

        <Button>
          <Link to='./edition'>Editar</Link>
        </Button>
      </ButtonsContainer>

      <Outlet />
    </Fragment>
  );
}

export default StoresLayout;
