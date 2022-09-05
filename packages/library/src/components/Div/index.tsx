import React from "react";
import styled from "styled-components";
import coinbaseIcon from "../../assets/coinbaseWalletIcon.svg";
import metamaskIcon from "../../assets/metamaskIcon.png";

const Container = styled.div`
  width: 400px;
  height: 400px;
  border: 1px solid black;
`;

const Div = () => {
  return (
    <Container>
      <img style={{width: 20, height: 20}} src={coinbaseIcon} alt="missing-image" />
      <div>meta mask</div>
      <img style={{width: 20, height: 20}} src={metamaskIcon} alt="missing-image" />
      
       {/* <CoinbaseIcon /> */}
    </Container>
  );
};

export default Div;
