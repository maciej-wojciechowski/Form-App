import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { MyContext } from "../Context";

const SentPage: React.FC = () => {
  const history = useHistory();
  const { state } = useContext(MyContext);

  useEffect(() => {
    const STATE_IS_EMPTY =
      state.facility === "" || state.email === "" || state.message === "";
    if (STATE_IS_EMPTY) {
      alert("Error with form...");
      history.push("/");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper className="main-content">
      <div className="container">
        <h2>Succesfully sent </h2>
        <h4>Your message:</h4>
        <div className="label-container">
          <label>Name:</label>
          <p>{state.name}</p>
        </div>
        <div className="label-container">
          <label>Email:</label>
          <p>{state.email}</p>
        </div>
        <div className="label-container">
          <label>Message:</label>
          <p>{state.message}</p>
        </div>
        <Link to="/">
          <button>Back to Main Page</button>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    width: 80%;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    @media (max-width: 600px) {
      width: 100%;
    }
    h2,
    h4 {
      align-self: center;
      margin-bottom: 0.5rem;
    }

    a {
      margin-top: 1rem;
      align-self: center;
    }
  }
`;

export default SentPage;
