// @ts-nocheck
import React, { useRef, useEffect, useState, RefObject } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import Wallet from "../Wallet";

const WalletWrapper = styled.div`
  width: 350px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 15px;
  top: 20px;
  background-color: white;
`;

const useOnClickOutside = (
  node: RefObject<T | undefined>,
  handler: undefined | (() => void),
  ignoredNodes: Array<RefObject<T | undefined>> = []
) => {
  const handlerRef = useRef<undefined | (() => void)>(handler);

  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const nodeClicked = node.current?.contains(e.target as Node);
      const ignoredNodeClicked = ignoredNodes.reduce(
        (reducer, val) => reducer || !!val.current?.contains(e.target as Node),
        false
      );

      if ((nodeClicked || ignoredNodeClicked) ?? false) return;

      if (handlerRef.current) handlerRef.current();
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [node, ignoredNodes]);
};

const Portal = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector("body");
    setMounted(true);
  }, [ref]);

  return mounted ? createPortal(children, ref.current) : null;
};

const Background = styled.div`
  z-index: 2147483647;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Modal = ({ isOpen, close }: { isOpen: boolean; close?: () => void }) => {
  const walletRef = useRef(null);

  useOnClickOutside(walletRef, close ? close : undefined);

  console.log(process.env);

  return isOpen ? (
    <Portal>
      <Background>
        <WalletWrapper ref={walletRef}>
          <Wallet />
        </WalletWrapper>
      </Background>
    </Portal>
  ) : null;
};

export default Modal;
