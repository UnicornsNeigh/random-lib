import React, { useEffect, useState } from "react";
import { StaticJsonRpcProvider } from "@ethersproject/providers";
import { AvatarResolver, utils } from "@ensdomains/ens-avatar";
import styled from "styled-components";

const Img = styled.img<{ size: number }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
`;

const EnsProfileImage = ({
  rpcProvider,
  ens,
  size,
}: {
  rpcProvider: string;
  ens: string;
  size?: number;
}) => {
  const [src, setSrc] = useState<null | string>(null);

  async function getAvatar() {
    const provider = new StaticJsonRpcProvider(rpcProvider);

    const avt = new AvatarResolver(provider);
    const avatarURI = await avt.getAvatar(ens, {});
    if (avatarURI) setSrc(avatarURI);
    else {
      console.log(avatarURI);
    }
  }

  useEffect(() => {
    getAvatar();
  }, [ens]);

  if (rpcProvider === undefined || rpcProvider.length === 0)
    return (
      <div>
        Please Pass an rpc provider url, for example:{" "}
        <b>https://mainnet.infura.io/v3/YOUR_API_KEY</b>. You can get one{" "}
        <a href="https://infura.io">here </a>
      </div>
    );
  if (ens === undefined || ens.length === 0)
    return (
      <div>
        Please pass an ens name, for example: <b>vitalik.eth</b>
      </div>
    );

  console.log(size);

  return src ? <Img size={size ?? 24} src={src} /> : null;
};

export default EnsProfileImage;
