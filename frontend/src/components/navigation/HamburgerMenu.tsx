import React, { useState, useRef, useEffect } from "react";
import "../../styles/navigation.css";

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuContentRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (menuContentRef.current) {
      const contentHeight = menuContentRef.current.scrollHeight;
      const flagHeight = 50;
      setMenuHeight(contentHeight + flagHeight);
    }
  }, [isOpen]);

  useEffect(() => {
    if (menuRef.current) {
      menuRef.current.style.setProperty("--menu-height", `${menuHeight}px`);
    }
  }, [menuHeight]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuItems = [
    { name: "ПУБЛИКАЦИИ", path: "/publications" },
    { name: "ТЕОРИЯ", path: "/theory" },
    { name: "БИБЛИОТЕКА", path: "/library" },
    { name: "РЕДАКТОР", path: "/editor" },
  ];

  return (
    <div
      className={`menu-container ${isOpen ? "menu-open" : ""}`}
      ref={menuRef}
    >
      <div
        className={`menu-content ${isOpen ? "show" : ""}`}
        ref={menuContentRef}
      >
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.path}
            className="menu-item"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </a>
        ))}
      </div>

      <button className="menu-flag" onClick={toggleMenu}>
        <div className="flag-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </div>
  );
};

export default HamburgerMenu;
