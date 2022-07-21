import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Main } from "./index";

function Layout(props) {
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
