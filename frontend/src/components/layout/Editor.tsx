import React from "react";
import TablatureWindow from "../editor/TablatureWindow";
import Toolbar from "../editor/Toolbar";
import GuitarFretboard from "../editor/GuitarFretboard";
import HamburgerMenu from "../navigation/HamburgerMenu";
import "../../styles/editor.css";

const Editor: React.FC = () => {
  return (
    <div className="editor-container">
      <HamburgerMenu />
      <div className="editor-header">
        <button className="save-button"></button>
        <p className="editor-title">РЕДАКТОР</p>
      </div>

      <TablatureWindow />

      <Toolbar />

      <GuitarFretboard />
    </div>
  );
};

export default Editor;
