import React from "react";
import styled from "styled-components";

const PrivacyPage: React.FC = () => {
  return (
    <Wrapper className="main-content">
      <h3>Privacy Terms</h3>
      <ol>
        <li>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet debitis
          quis ratione suscipit, inventore dicta.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet debitis
          quis ratione suscipit, inventore dicta.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet debitis
          quis ratione suscipit, inventore dicta.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet debitis
          quis ratione suscipit, inventore dicta.
        </li>
      </ol>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  > * {
    font-size: larger;
  }
`;

export default PrivacyPage;
