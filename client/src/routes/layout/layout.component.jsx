import { Fragment } from "react";
import { Outlet } from "react-router-dom";

function Layout(props) {
  return (
    <Fragment>
      <header>header</header>

      <main>
        <p>main</p>
        <Outlet />
      </main>

      <footer>footer</footer>
    </Fragment>
  );
}

export default Layout;
