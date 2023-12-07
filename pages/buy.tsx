import { useContract, useNFTs } from "@thirdweb-dev/react";
import React from "react";
import Container from "../components/Container/Container";
import NFTGrid from "../components/NFT/NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "../const/contractAddresses";

export default function Buy() {
  // Load all of the NFTs from the NFT Collection
  const { contract } = useContract(NFT_COLLECTION_ADDRESS);
  const { data, isLoading } = useNFTs(contract);

  return (
    <Container maxWidth='lg'>
      <h1>Vote</h1>
      <p>당신이 원하는 방향에 투표해주세요.</p>
      <NFTGrid
        data={data}
        isLoading={isLoading}
        emptyText={"이런 투표 주제부터 선정해볼까요?"}
      />
    </Container>
  );
}
