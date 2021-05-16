import { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Theme";
import { MyContext } from "./Context";
// Router
import { Switch, Route, useLocation, Link } from "react-router-dom";
// Pages
import IndexPage from "./pages/IndexPage";
import FormPage from "./pages/FormPage";
import SentPage from "./pages/SentPage";
import PrivacyPage from "./pages/PrivacyPage";
// Components
import AppBar from "./components/AppBar";
import { Switch as MuiSwitch } from "@material-ui/core";

import { ToastContainer } from "react-toastify";

const App: React.FC = () => {
  const location = useLocation();
  const [theme, setTheme] = useState("light");
  const [state, setState] = useState({
    facility: "",
    name: "",
    email: "",
    message: "",
  });

  const [clockState, setClockState] = useState({ hour: "", date: "" });

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <Wrapper>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <MyContext.Provider
          value={{ state, setState, clockState, setClockState }}>
          <GlobalStyle />
          <AppBar />
          <ToastContainer position="top-center" />
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact>
              <IndexPage />
            </Route>
            <Route path="/form" exact>
              <FormPage />
            </Route>
            <Route path="/form/sent" exact>
              <SentPage />
            </Route>
            <Route path="/privacy" exact>
              <PrivacyPage />
            </Route>
          </Switch>
          <div className="container-buttons bar">
            <Link to="/">
              <button>Main Page</button>
            </Link>
            <Link to="/privacy">
              <button>Privacy Terms</button>
            </Link>
            <MuiSwitch color="primary" onChange={themeToggler} />
          </div>
        </MyContext.Provider>
      </ThemeProvider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container-buttons {
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      margin: 0 0.5rem;
    }
  }
`;

export default App;
