import React, { useState, useRef, useEffect } from "react";

const UserDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="user-dropdown-container" ref={dropdownRef}>
      <button className="user-dropdown-trigger" onClick={toggleDropdown}>
        <img src="/images/user_avatar.png" className="user-avatar-large" />
        <span className="dropdown-arrow">{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className="user-dropdown-menu">
          <div className="dropdown-header">
            <img src="/images/user_avatar.png" className="user-avatar-large" />
            <div className="user-profile-info">
              <div className="user-name">Молчанова В.</div>
            </div>
          </div>

          <div className="dropdown-divider"></div>

          <div className="user-info-section">
            <div className="info-item">
              <span className="info-label">Почта:</span>
              <span className="info-value">alexey@example.com</span>
            </div>
            <div className="info-item">
              <span className="info-label">Роль:</span>
              <span className="info-value role-user">ПРОФИ</span>
            </div>
          </div>

          <button className="logout-btn">ВЫЙТИ</button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
