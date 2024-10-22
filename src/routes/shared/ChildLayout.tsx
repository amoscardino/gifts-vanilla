import { Link, Outlet } from "react-router-dom";

const ChildLayout = () => (
  <>
    <div className="mb-3">
      <Link to="/" className="btn btn-outline-secondary btn-sm">
        Back
      </Link>
    </div>

    <Outlet />
  </>
);

export default ChildLayout;

