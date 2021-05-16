import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { MyContext } from "../Context";

const Clock: React.FC = () => {
  const { clockState, setClockState } = useContext(MyContext);
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState({
        hour: date.toLocaleTimeString(),
        date: date.toLocaleDateString(),
      });
    });
  });
  return (
    <Wrapper>
      <h5>{clockState.hour}</h5>
      <h6>{clockState.date}</h6>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  margin: 0 1rem;
  padding: 0 0.5rem;

  h5 {
    font-size: x-large;
    @media (max-width: 600px) {
      font-size: 85%;
    }
  }
  h6 {
    font-size: medium;
    @media (max-width: 600px) {
      font-size: 85%;
    }
  }

  h5,
  h6 {
    font-family: "Roboto Mono", monospace;
    user-select: none;
  }
`;

export default Clock;
