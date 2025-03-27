import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
      primary: {  
        main: "#6C584C",
      },
    },
    typography: {
      fontFamily: "Roboto, sans-serif",
      h1: {
        fontSize: "2rem",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            padding: "6px 16px",
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: "#6C584C",
            color: "#F0EAD2",
          },
        },
      },
      RaEditButton: {
        styleOverrides: {
          root: {
            backgroundColor: "#DDE5B6",
            color: "#6C584C",
            "&:hover": {
              backgroundColor: "#ADC178",
            },
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          head: {
            fontWeight: "bold",
            textTransform: "uppercase",
            backgroundColor: "#A98467 !important", // Brown header
            color: "#F0EAD2 !important", // Beige text
            fontSize: "14px",
          },
          body: {
            fontSize: "14px",
            color: "#333",
          },
        },
      },
  },
});

export default theme;