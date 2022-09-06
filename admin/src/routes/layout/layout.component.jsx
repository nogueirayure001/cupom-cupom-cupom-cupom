import { Fragment, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { useBackToTopButton } from '../../hooks';
import { Header } from '../../components/header';
import { Main, BackToTopButton } from './index';

function Layout(props) {
  const showButton = useBackToTopButton();
  const { pathname } = useLocation();

  const backToTopHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scroll({
      top: 0
    });
  }, [pathname]);

  return (
    <Fragment>
      <Header />

      <BackToTopButton show={showButton} onClick={backToTopHandler} />

      <Main>
        <Outlet />
      </Main>
    </Fragment>
  );
}

export default Layout;
