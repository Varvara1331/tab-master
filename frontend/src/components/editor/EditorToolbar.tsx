import React from 'react';

const EditorToolbar: React.FC = () => {
  return (
    <div className="editor-toolbar">
      <button className="toolbar-button">Новый проект</button>
      <button className="toolbar-button">Сохранить</button>
      <button className="toolbar-button">Экспорт</button>
      
      <div style={{ flex: 1 }}></div>
      
      <button className="toolbar-button">Нота</button>
      <button className="toolbar-button">Пауза</button>
      <button className="toolbar-button">Аккорд</button>
      <button className="toolbar-button">Лад</button>
      
      <div style={{ flex: 1 }}></div>
      
      <button className="toolbar-button">Отменить</button>
      <button className="toolbar-button">Повторить</button>
    </div>
  );
};

export default EditorToolbar;