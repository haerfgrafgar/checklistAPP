import React from "react";
import "../css/navbar.css";
import { getToken } from "../Helper";

const Navbar: React.FC = () => {
  const token = getToken();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" className="navbar-logo">
          HOME
        </a>
      </div>
      <ul className="navbar-links">
        {token?.role === "Admin" && (
          <li>
            <a href="/checklists/verificador" className="navbar-item">
              Verificador
            </a>
          </li>
        )}
        <li>
          <a href="/checklists" className="navbar-item">
            Executante
          </a>
        </li>
        <li>
          {token?.role === "Admin" && (
            <div>
              <a href="/checklists/create" className="navbar-item">
                Create Checklist
              </a>
              <a href="/accounts/list" className="navbar-item">
                Users
              </a>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
