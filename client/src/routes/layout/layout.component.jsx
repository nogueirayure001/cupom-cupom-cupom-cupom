import { Fragment, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';

import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { Main } from './index';

function Layout(props) {
  const params = useParams();

  useEffect(() => {
    window.scroll({
      top: 0
    });
  }, [params]);

  return (
    <Fragment>
      <Header />

      <Main>
        <Outlet />
      </Main>

      <Footer />
    </Fragment>
  );
}

export default Layout;
