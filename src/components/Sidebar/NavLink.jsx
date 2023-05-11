import { Link } from "react-router-dom";

const NavLink = ({ children, navTo, title }) => {
  return (
    <Link to={navTo} className="sidebar--link text-white">
      <div className="fw-semibold d-flex align-items-center mb-3">
        {children}
        {title}
      </div>
    </Link>
  );
};

export default NavLink;
