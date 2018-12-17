import React from "react";

export default React.createContext({
  sideNavOpen: true,
  selectedSideNavIndex: 0,
  onSideNavChange: () => {},
});
