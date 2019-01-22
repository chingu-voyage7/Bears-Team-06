import React from "react";

export default React.createContext({
  companiesModalOpen: false,
  closeCompaniesModal: () => {},
  openCompaniesModal: () => {},
  companySearchText: "",
  companySearching: false,
  companySearchFetched: false,
  //Holds the list of all searched companies
  companies: [],
  changeCompanySearchText: () => {},
  setCompanySearching: () => {},
  setCompanySearchFetched: () => {},
  setCompanies: () => {},
});
