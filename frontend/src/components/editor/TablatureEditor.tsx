import React from "react";
import EditorToolbar from "./EditorToolbar";
import TablatureView from "./TablatureView";
import "../../styles/editor.css";

const TablatureEditor: React.FC = () => {
  return (
    <div className="main-content">
      <EditorToolbar />
      <TablatureView />

      <div className="transport-bar">
        <button className="transport-button">⏮</button>
        <button className="transport-button">◀◀</button>
        <button className="transport-button play">▶</button>
        <button className="transport-button">⏸</button>
        <button className="transport-button">▶▶</button>
        <button className="transport-button">⏭</button>

        <div className="time-display">00:00 / 04:32</div>

        <div style={{ flex: 1, margin: "0 20px" }}>
          <div
            style={{
              height: "4px",
              background: "#475569",
              borderRadius: "2px",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "30%",
                top: "-6px",
                width: "12px",
                height: "12px",
                background: "#3b82f6",
                borderRadius: "50%",
              }}
            ></div>
          </div>
        </div>

        <div style={{ color: "#94a3b8" }}>
          Tempo: <strong>120 BPM</strong>
        </div>
      </div>
    </div>
  );
};

export default TablatureEditor;
