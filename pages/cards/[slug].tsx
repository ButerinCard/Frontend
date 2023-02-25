import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { execute, LastMintedDocument } from "../../.graphclient";
import Page from "../../components/Page";
import useCardProvider from "../../libs/hooks/card";

export default function Card() {
    const router = useRouter();
    const [lastTokenId, setTokenId] = useState('-1');
    const {prev, setPrev} = useCardProvider(); 
    useEffect(() => {
        execute(LastMintedDocument, {}).then(r => {
            if (r.data) {
                setTokenId(r.data.cards[0].id)
            }
        }).catch((e: any) => console.log(e));
    }, [])

    const { slug, prev: prevQ } = router.query
    if(prevQ ){
        
        setPrev(true)
    } else {
        setPrev(false); 
    }

    const tokenId = slug as string; 
    return (
        <Page tokenId={tokenId} prev={false} />
    )
}


