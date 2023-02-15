import { CardParams } from "./types";


const params = {
    tokenId: 650,
    phaseId: 3,
    tokenIdWithinPhase: 1,
    kiloBytes: 34,
    patternId: 0,
    colorId: 12,
    quoteId: 3,
    seed: 114
};

let tokenIdsFirstInScans = [
    0, 76, 107, 149, 191, 230, 268, 302, 334, 364, 393, 422, 451, 482, 523, 564, 605, 646, 684, 718, 751, 782, 811, 840,
    870, 909, 948, 987, 1024, 1060, 1094, 1126, 1156, 1185, 1214, 1253, 1277, 1295, 1319, 1383, 1425, 1478, 1528, 1580,
    1609, 1636, 1683, 1728, 1762, 1790, 1792, 1794, 1803, 1844, 1873, 1892, 1936, 1978
];

export async function GenerateCard(param: CardParams) {
    //Todo convert INDEXED data to SVG Params 
    // Open SVG file in utf8
    const svg = await fetch('/cardForContract.svg').then(r => r.text());
    // Insert JPEG data URI and parameters
    let newSvg = svg.replace("_COMMA_SEPARATED_PARAMETERS_", Object.values(param).join(","));

    const scanId = tokenIdsFirstInScans.findIndex((tokenIdFirstInScan) => params.tokenId < tokenIdFirstInScan) - 1;
    newSvg =
        scanId === 0
            ? newSvg.replace("_DATA_URI_BUTERIN_", "")
            : (newSvg = newSvg.replace(
                "_DATA_URI_BUTERIN_",
                '/jpegs/Buterin012.jpg'
            ));
    console.log(newSvg); 
    return newSvg;
}
