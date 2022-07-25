import React, { useState } from "react";
import "./LeftPanel.css";
import { Link, NavLink } from "react-router-dom";

export default function LeftPanel({ children }) {
  const [check, setcheck] = useState(false);
  return (
    <div className="leftpanel">
      <div className="sidebar-l">
        <div className="heading">
          <i class="bx bxs-shopping-bags"></i>
          <span>Soft UI Dashboard</span>
        </div>
        <div className="navlinks">
          <ul>
            <NavLink
              to="/"
              // key={index}
              className="link123"
              activeClassName={check ? "active123" : "acti"}
              onClick={() => {
                setcheck(!check);
              }}
            >
              <li>
                <div>
                  <div className="box-shadow icons">
                    <i class="bx bxs-dashboard "></i>
                  </div>
                  <span>Dashboard</span>
                </div>
              </li>
            </NavLink>
            <NavLink
              to="/table"
              className="link123"
              activeClassName={!check ? "active123" : "acti"}
              onClick={() => {
                setcheck(!check);
              }}
            >
              <li>
                <div>
                  <div className="box-shadow icons">
                    <i class="bx bx-table"></i>
                  </div>
                  <span>Table</span>
                </div>
              </li>
            </NavLink>
            <NavLink
              to="/billing"
              className="link123"
              activeClassName="active123"
            >
              <li>
                <div>
                  <div className="box-shadow icons">
                    <i class="fa-solid fa-wallet"></i>
                  </div>
                  <span>Billing</span>
                </div>
              </li>
            </NavLink>
            <NavLink
              to="/virtual"
              className="link123"
              activeClassName="active123"
            >
              <li>
                <div>
                  <div className="box-shadow icons">
                    <i class="fa-solid fa-vr-cardboard"></i>
                  </div>
                  <span>Virtual</span>
                </div>
              </li>
            </NavLink>
            <NavLink to="/rtl" className="link123" activeClassName="active123">
              <li>
                <div>
                  <div className="box-shadow icons">
                    <i class="fa-solid fa-gears"></i>
                  </div>
                  <span>RTL</span>
                </div>
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="acc-page" activeClassName="active123">
          <span>Account Pages</span>
        </div>
        <div className="navlinks">
          <ul>
            <NavLink
              to="/profile"
              className="link123"
              activeClassName="active123"
            >
              <li>
                <div>
                  <div className="box-shadow icons">
                    <i class="fa-solid fa-user"></i>
                  </div>
                  <span>Profile</span>
                </div>
              </li>
            </NavLink>
            <NavLink
              to="/signin"
              className="link123"
              activeClassName="active123"
            >
              <li>
                <div>
                  <div className="box-shadow icons">
                    <i class="fa-solid fa-bridge-lock"></i>
                  </div>
                  <span>Sign In</span>
                </div>
              </li>
            </NavLink>
            <NavLink
              to="/signup"
              className="link123"
              activeClassName="active123"
            >
              <li>
                <div>
                  <div className="box-shadow icons">
                    <i class="fa-solid fa-user-plus"></i>
                  </div>
                  <span>Sign Up</span>
                </div>
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
      <div className="main-container-second">
        {/* <header className="header">
          <header className="header-l">
            <motion.div className="bars">
              {isOpen ? (
                <i class="fas fa-xmark" onClick={toggle}></i>
              ) : (
                <FaBars onClick={toggle} />
              )}
            </motion.div>
            <span className="heading">Dashborad</span>
          </header>
          <header className="header-r">
            <i class="bx bx-user-circle"></i>
            <FiLogOut className="logout" />
          </header>
        </header> */}

        <main>{children}</main>
      </div>
    </div>
  );
}
