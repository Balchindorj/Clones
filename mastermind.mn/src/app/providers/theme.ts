import { Height } from "@mui/icons-material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(255, 190, 2)",
      light: "#F1FEFF",
      dark: "#1A1F36",
    },
    secondary: {
      main: "rgb(74, 40, 126)",
      light: "#27AAE1",
      dark: "rgb(74, 40, 126)"
    }, 
  },
  typography: {
    fontFamily: "var(--font-inter)",
    h1: {
      fontSize: 64,
      fontWeight: 600,
    },
    body1: {
      fontSize: "15px",
      lineHeight: "24px",
    },
    h3: {
      fontSize: "48px",
      fontWeight: "700px"
    },
    h6: {
      fontWeight: "500px",
      fontSize: "15px"
    }
  },
});

export default theme;
