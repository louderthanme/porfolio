import React from "react";
import theme from "../utils/theme";
import { useMediaQuery } from "@mui/material";
import { ThemeValuesContext } from "./theme-values.context";

const ThemeValuesProvider = ({ children }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
  const isLaptop = useMediaQuery(theme.breakpoints.up("xl"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("xxl"));
  const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <ThemeValuesContext.Provider
      value={{
        theme,
        checks: { isMobile, isTablet, isLaptop, isDesktop, isDarkMode },
      }}
    >
      {children}
    </ThemeValuesContext.Provider>
  );
};

export default ThemeValuesProvider;
