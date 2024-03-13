import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
} from "react-icons/bs";
import { FaBookOpen, FaAngleDown, FaAngleUp } from "react-icons/fa";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [showWebContentSubMenu, setShowWebContentSubMenu] = useState(false);
  const [showStudentSubMenu, setShowStudentSubmenu] = useState(false);
  const [showFeeSubMenu, setShowFeeSubmenu] = useState(false);
  const [showCertificateSubMenu, setShowCertificateSubmenu] = useState(false);

  const toggleWebContentSubMenu = () => {
    setShowWebContentSubMenu(!showWebContentSubMenu);
    // If you want to close other submenus when one is opened, you can handle it here
  };
  const toggleStudentSubMenu = () => {
    setShowStudentSubmenu(!showStudentSubMenu);
  };
  const toggleFeeSubMenu = () => {
    setShowFeeSubmenu(!showFeeSubMenu);
  };
  const toggleCertificateSubMenu = () => {
    setShowCertificateSubmenu(!showCertificateSubMenu);
  };

  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <FaBookOpen className="icon_header" /> SHIKSHASAATHI
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link to="/">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item" onClick={toggleWebContentSubMenu}>
          <BsFillArchiveFill className="icon" /> Web
          Content&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {showWebContentSubMenu ? <FaAngleUp /> : <FaAngleDown />}
          {showWebContentSubMenu && (
            <ul className="submenu sidebar-list">
              <li className="sidebar-list-item">
                <Link to="/background">Top/Main Banner</Link>
              </li>
              <li className="sidebar-list-item">
                <Link to="/#">Top Banner Background</Link>
              </li>
              <li className="sidebar-list-item">
                <Link to="/#">Main Page Text</Link>
              </li>
              <li className="sidebar-list-item">
                <Link to="/#">About Page Text</Link>
              </li>
              <li className="sidebar-list-item">
                <Link to="/#">Course Page Text</Link>
              </li>
              <li className="sidebar-list-item">
                <Link to="/#">Contact Us Page</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="sidebar-list-item" onClick={toggleStudentSubMenu}>
          <BsPeopleFill className="icon" />
          Students&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {showStudentSubMenu ? <FaAngleUp /> : <FaAngleDown />}
          {showStudentSubMenu && (
            <ul className="submenu sidebar-list">
              <li className="sidebar-list-item">
                <Link to="/students">New Student</Link>
              </li>
              <li className="sidebar-list-item">
                <Link to="/list">Student List</Link>
              </li>
              <li className="sidebar-list-item">
                <Link to="/#">Admission Inquiry Form</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="sidebar-list-item" onClick={toggleFeeSubMenu}>
          <BsFillGrid3X3GapFill className="icon" /> Fee Receipt
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {showFeeSubMenu ? <FaAngleUp /> : <FaAngleDown />}
          {showFeeSubMenu && (
            <ul className="submenu sidebar-list">
              <li className="sidebar-list-item">
                <Link to="/#">New Fee Receipt</Link>
              </li>
              <li className="sidebar-list-item">
                <Link to="/#">New Fee Receipt(ID)</Link>
              </li>
              <li className="sidebar-list-item">
                <Link to="/#">List All Receipt</Link>
              </li>
              <li className="sidebar-list-item">
                <Link to="/#">Receipt Statement</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="sidebar-list-item" onClick={toggleCertificateSubMenu}>
          <BsListCheck className="icon" /> Certificate
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {showCertificateSubMenu ? <FaAngleUp /> : <FaAngleDown />}
          {showCertificateSubMenu && (
            <ul className="submenu sidebar-list">
              <li className="sidebar-list-item">
                <Link to="/#">New Certificate</Link>
              </li>
              <li className="sidebar-list-item">
                <Link to="/#">Certificate List</Link>
              </li>
              <li className="sidebar-list-item">
                <Link to="/#">Certificate Correction</Link>
              </li>
              <li className="sidebar-list-item">
                <Link to="/#">New Certificate & Marksheet</Link>
              </li>
              <li className="sidebar-list-item">
                <Link to="/#">New only Marksheet</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
