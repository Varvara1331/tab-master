import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <div className="sidebar-title">Треки</div>
        <div className="track-item">Гитара</div>
        <div className="track-item">Бас-гитара</div>
        <div className="track-item">Ударные</div>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-title">Инструменты</div>
        <div className="track-item">Электрогитара</div>
        <div className="track-item">Акустическая гитара</div>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-title">Эффекты</div>
        <div className="track-item">Дисторшн</div>
        <div className="track-item">Хорус</div>
        <div className="track-item">Дилэй</div>
      </div>
    </div>
  );
};

export default Sidebar;
