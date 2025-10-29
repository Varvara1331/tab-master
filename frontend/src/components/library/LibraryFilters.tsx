import React from "react";

const Filters: React.FC = () => {
  return (
    <div className="filters">
      <div className="select-wrapper">
        <span>статус:</span>
        <select className="select-box">
          <option> </option>
          <option>готовая</option>
          <option>черновик</option>
        </select>
      </div>
      <div className="select-wrapper">
        <span>категория:</span>
        <select className="select-box">
          <option> </option>
          <option>рок</option>
          <option>джаз</option>
        </select>
      </div>
      <div className="select-wrapper">
        <span>сложность:</span>
        <select className="select-box">
          <option> </option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div className="input-wrapper">
        <span>название:</span>
        <input
          type="text"
          className="input-field"
          placeholder="введите название"
        />
      </div>

      <div className="input-wrapper">
        <span>исполнитель:</span>
        <input
          type="text"
          className="input-field"
          placeholder="введите исполнителя"
        />
      </div>
    </div>
  );
};

export default Filters;
