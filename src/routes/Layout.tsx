import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container-xl min-vh-100 vstack gap-3 py-3">
      <header>
        <nav className="navbar navbar-expand-md bg-body border rounded shadow-sm">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand ms-sm-3 mb-0 h1">
              <i className="bi bi-gift"></i>
              &nbsp;
              Gifts
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-grow-1">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7 col-md-8 col-sm-10 col-xs-12">
              <Outlet />
            </div>
          </div>
        </div>
      </main>

      <footer className="text-center text-muted">
        Gifts Vanilla {import.meta.env.VITE_VERSION}
      </footer>
    </div>
  );
};

export default Layout;
