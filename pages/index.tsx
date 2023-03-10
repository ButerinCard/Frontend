import { useEffect, useMemo, useState } from "react";
import { execute, LastMintedDocument } from "../.graphclient";
import Script from 'next/script'; 
import Page from "../components/Page";

export default function Home() {
  const [tokenId, setTokenId] = useState('-1');
  useEffect(() => {
    execute(LastMintedDocument, {}).then(r => {
      if (r.data) {
        setTokenId(r.data.cards[0].id)
      }
    }).catch((e: any) => console.log(e));
  }, [])


  return (
    <div>
      <Page tokenId={tokenId} lastTokenId={tokenId} />
    </div>

  )
}


