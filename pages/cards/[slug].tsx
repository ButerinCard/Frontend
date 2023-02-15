import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { execute, LastMintedDocument } from "../../.graphclient";
import Page from "../../components/Page";

export default function Card() {
    const router = useRouter();
    const [lastTokenId, setTokenId] = useState('-1');
    useEffect(() => {
        execute(LastMintedDocument, {}).then(r => {
            if (r.data) {
                setTokenId(r.data.cards[0].id)
            }
        }).catch((e: any) => console.log(e));
    }, [])

    const { slug } = router.query
    const tokenId = slug as string; 
    return (
        <Page tokenId={tokenId} lastTokenId={lastTokenId} />
    )
}


