import React from "react";
import Home from "./pages/home";
import { Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#0288d1" }, // Purple and green play nicely together.
    secondary: { main: "#11cb5f" } // This is just green.A700 as hex.
  },
  typography: { useNextVariants: true }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      {/* <Home /> */}
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </MuiThemeProvider>
  );
}

export default App;
