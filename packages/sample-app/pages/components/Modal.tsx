import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { Wallet } from "random123azaaaazdsf";

const WalletWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 15px;
`;

const Portal = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // @ts-ignore
    ref.current = document.querySelector("body");
    setMounted(true);
  }, []);

  // @ts-ignore
  return mounted ? createPortal(children, ref.current) : null;
};

const Modal = ({ isOpen }: { isOpen: boolean }) => {
  return isOpen ? (
    <Portal>
      <WalletWrapper>
        <Wallet />
      </WalletWrapper>
    </Portal>
  ) : null;
};

export default Modal;
