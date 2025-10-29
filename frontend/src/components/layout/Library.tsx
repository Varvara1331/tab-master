import React from "react";
import LibraryFilters from "../library/LibraryFilters";
import LibraryTable from "../library/LibraryTable";
import UserDropdown from "../user/UserDropdown";
import HamburgerMenu from "../navigation/HamburgerMenu";
import "../../styles/tablatures.css";

const Library: React.FC = () => {
  return (
    <div className="tablatures-container">
      <div className="tablatures-header">
        <HamburgerMenu />
        <p className="tablatures-title">БИБЛИОТЕКА</p>
        <UserDropdown />
      </div>
      <div className="publications-content">
        <LibraryFilters />
        <LibraryTable />
      </div>
    </div>
  );
};

export default Library;
