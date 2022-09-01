import React from "react";
import styled from "styled-components";

const Text = styled.span`
  color: white;
  font-size: 18px;
  font-weight: 600;
  margin-top: auto;
  margin-bottom: auto;
`;

const OptionContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  background-color: black;
  padding: 12px 16px;
  border-bottom: 1px solid gray;
  border-radius: 12px;
  margin-bottom: 10px;
`;

const Img = styled.img`
  margin-top: auto;
  margin-bottom: auto;
  width: 16px;
  height: 16px;
`;

const WalletOption = ({
  text,
  src,
  onClick,
}: {
  text: string;
  src: string;
  onClick: () => void;
}) => {
  return (
    <OptionContainer onClick={onClick}>
      <Text>{text}</Text> <Img src={src} />
    </OptionContainer>
  );
};

export default WalletOption;
