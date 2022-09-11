import React, { useEffect, useState } from "react";
import { StaticJsonRpcProvider } from "@ethersproject/providers";
import { AvatarResolver } from "@ensdomains/ens-avatar";
import styled from "styled-components";

const Img = styled.img<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
`;

const EnsProfileImage = ({ ens, size }: { ens: string; size?: number }) => {
  const [src, setSrc] = useState<null | string>(null);
  const rpcProvider = process.env.REACT_APP_RPC_URL;

  async function getAvatar() {
    const provider = new StaticJsonRpcProvider(rpcProvider);

    const avt = new AvatarResolver(provider);
    const avatarURI = await avt.getAvatar(ens, {});
    if (avatarURI) setSrc(avatarURI);
  }

  useEffect(() => {
    getAvatar();
  }, [ens]);

  if (rpcProvider === undefined || rpcProvider === "")
    return (
      <div>
        Please set an rpc provider url in your environment variables, for
        example:{" "}
        <b>REACT_APP_RPC_URL=https://mainnet.infura.io/v3/YOUR_API_KEY</b>. You
        can get any api key for free <a href="https://infura.io">here </a>. If
        you are using storybook, you can set it in the controls.
      </div>
    );
  if (ens === undefined || ens.length === 0)
    return (
      <div>
        Please pass an ens name, for example: <b>vitalik.eth</b>
      </div>
    );

  return src ? <Img size={size ?? 24} src={src} /> : null;
};

export default EnsProfileImage;
