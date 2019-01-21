import React from "react";

export default React.createContext({
  companiesModalOpen: false,
  closeCompaniesModal: () => {},
  openCompaniesModal: () => {},
});
