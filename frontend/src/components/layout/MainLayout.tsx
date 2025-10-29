import React from "react";
import Sidebar from "./Sidebar";
import TablatureEditor from "../editor/TablatureEditor";

const MainLayout: React.FC = () => {
  return (
    <div className="editor-container">
      <Sidebar />
      <TablatureEditor />
    </div>
  );
};

export default MainLayout;
