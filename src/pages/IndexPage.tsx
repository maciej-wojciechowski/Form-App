import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MyContext } from "../Context";

const IndexPage: React.FC = () => {
  const { state, setState } = useContext(MyContext);
  useEffect(
    () =>
      setState({ ...state, facility: "", name: "", email: "", message: "" }),
    // eslint-disable-next-line
    []
  );
  const history = useHistory();

  const facilityHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState({ ...state, facility: e.target.value });
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state.facility !== "") {
      history.push("/form");
    } else {
      alert('"Please choose facility first...!"');
    }
  };
  return (
    <Wrapper className="main-content">
      <form className="facility-form" onSubmit={submitHandler}>
        <div className="label-container">
          <label>Facility: </label>
          <select onChange={facilityHandler} value={state.facility} required>
            <option value="">Choose facility...</option>
            <option value="XYZ Warszawa">XYZ Warszawa, Poland</option>
            <option value="ABC Kraków">ABC Kraków, Poland</option>
            <option value="RNQ Berlin">RNQ Berlin, Germany</option>
          </select>
        </div>
        <button type="submit">Next</button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .facility-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    button {
      margin-top: 1rem;
    }
  }
`;

export default IndexPage;
