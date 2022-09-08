import React, { useEffect, useState } from "react";
import { StaticJsonRpcProvider } from "@ethersproject/providers";
import { AvatarResolver, utils } from "@ensdomains/ens-avatar";
import styled from "styled-components";

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const EnsProfileImage = ({
  rpcProvider,
  ens,
}: {
  rpcProvider: string;
  ens: string;
}) => {
  const [src, setSrc] = useState<null | string>(null);

  async function getAvatar() {
    const provider = new StaticJsonRpcProvider(rpcProvider);

    const avt = new AvatarResolver(provider);
    const avatarURI = await avt.getAvatar(ens, {});
    if (avatarURI) setSrc(avatarURI);
  }

  useEffect(() => {
    getAvatar();
  }, []);

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

  return src ? <Img src={src} /> : null;
};

export default EnsProfileImage;
