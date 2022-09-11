import React from "react";
import styled from "styled-components";

const Text = styled.span`
  color: white;
  font-size: 18px;
  font-weight: 500;
  margin-top: auto;
  margin-bottom: auto;
`;

const OptionContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  background-color: #12111b;
  padding: 12px 16px;
  border: 1px solid #2e3348;
  border-radius: 12px;

  &:hover {
    border-color: #0c72b8;
    transition: border-color 0.15s ease-in;
  }
`;

const Img = styled.img`
  margin-top: auto;
  margin-bottom: auto;
  width: 24px;
  height: 24px;
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
