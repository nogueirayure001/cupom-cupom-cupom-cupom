import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/header";

function Layout(props) {
  return (
    <Fragment>
      <Header />

      <main>
        <Outlet />
      </main>

      <footer>footer</footer>
    </Fragment>
  );
}

export default Layout;
