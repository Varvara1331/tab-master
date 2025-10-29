import React from "react";

const Toolbar: React.FC = () => {
  return (
    <div className="toolbar">
      <div className="toolbar-block">
        <button className="toolbar-button">g</button>
        <button className="toolbar-button">p</button>
        <button className="toolbar-button">h</button>
        <button className="toolbar-button">b</button>
      </div>
      <div className="toolbar-block">
        <button className="toolbar-button">r</button>
        <button className="toolbar-button">/</button>
        <button className="toolbar-button">t</button>
        <button className="toolbar-button">\</button>
      </div>
      <div className="toolbar-block">
        <button className="toolbar-button">~</button>
        <button className="toolbar-button">+</button>
        <button className="toolbar-button">`</button>
        <button className="toolbar-button"> </button>
      </div>
      <div className="toolbar-block">
        <button className="toolbar-button">bp</button>
        <button className="toolbar-button">pb</button>
        <button className="toolbar-button">-</button>
        <button className="toolbar-button">|</button>
      </div>
      <div className="toolbar-block">
        <div className="editor-select-wrapper">
          <span>интервал:</span>
          <select className="editor-select-box">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="toggle-switch">
          <span>множественный выбор (ctrl + c)</span>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>
        <div className="editor-select-wrapper">
          <span>строй:</span>
          <select className="editor-select-box">
            <option>стандарт</option>
            <option>Drop D</option>
            <option>Open G</option>
            <option>полутон ниже</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
