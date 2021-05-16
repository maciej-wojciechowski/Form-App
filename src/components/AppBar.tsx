import React from "react";
import styled from "styled-components";
import Clock from "./Clock";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { Link } from "react-router-dom";

const AppBar: React.FC = () => {
  return (
    <Wrapper className="bar">
      <Link to="/">
        <div id="logo-container">
          <BorderColorIcon className="logo" />
          <h2>Form - Softax</h2>
        </div>
      </Link>
      <Clock />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 15vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  #logo-container {
    display: flex;
    cursor: pointer;
    align-items: center;
    color: white;
    h2 {
      font-family: "Lobster", cursive;
      text-decoration: underline;
      font-weight: 300;
      user-select: none;
      @media (max-width: 400px) {
        font-size: 90%;
      }
    }
    .logo {
      margin: 1rem;
    }
  }
`;

export default AppBar;
