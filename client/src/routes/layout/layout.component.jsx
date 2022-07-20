import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

function Layout(props) {
  return (
    <Fragment>
      <Header />

      <main style={{ width: "100%" }}>
        <Outlet />
      </main>

      <Footer />
    </Fragment>
  );
}

export default Layout;
