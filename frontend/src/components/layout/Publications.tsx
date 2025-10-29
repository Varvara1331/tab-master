import React from "react";
import PublicationsFilters from "../publications/PublicationsFilters";
import PublicationsTable from "../publications/PublicationsTable";
import UserDropdown from "../user/UserDropdown";
import HamburgerMenu from "../navigation/HamburgerMenu";
import "../../styles/tablatures.css";

const Publications: React.FC = () => {
  return (
    <div className="tablatures-container">
      <div className="tablatures-header">
        <HamburgerMenu />
        <p className="tablatures-title">ПУБЛИКАЦИИ</p>
        <UserDropdown />
      </div>
      <div className="publications-content">
        <PublicationsFilters />
        <PublicationsTable />
      </div>
    </div>
  );
};

export default Publications;
