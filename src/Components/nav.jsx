import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaBitcoin,
} from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { GrLink } from "react-icons/gr";
import { FaChartSimple } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const menuItem = [
    {
      path: "/",
      name: "Chart",
      icon: <FaChartSimple />,
    },
    {
      path: "/crypto",
      name: "Bitcoin",
      icon: <FaBitcoin />,
    },
    {
      path: "/metaConn",
      name: "MetaMask",
      icon: <GrLink />,
    },
  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            <img
              src="https://pioneerlabs.org/assets/img/logo.png"
              alt=""
              srcset=""
              style={{ width: "100px", height: "100%" }}
            />
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className={activeLink === item.path ? "active link" : "link"}
            onClick={() => handleLinkClick(item.path)}
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
