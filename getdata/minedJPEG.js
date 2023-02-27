const ethers = require("ethers");

const apiKey = "d31b08a1f844450fb852777f3de12117";

const tokenIdToBytes = [
    8976, 10652, 10652, 9604, 8900, 8636, 8188, 8036, 7932, 7876, 7856, 8952, 8860, 9812, 12900, 9812, 12900, 9788,
    12896, 9600, 11876, 9280, 9192, 8924, 8560, 8488, 8200, 8160, 8008, 8008, 7960, 7956, 7888, 17792, 18912, 21108,
    14512, 18116, 21556, 17804, 22884, 19344, 20352, 17340, 16984, 24412, 15880, 20492, 20732, 22772, 19332, 12904,
    23756, 20844, 22340, 19192, 21500, 21700, 17376, 16380, 19340, 24428, 13452, 14200, 13444, 14012, 13544, 20380,
    12720, 14160, 18824, 14572, 14344, 24204, 14788, 14944, 14744, 18452, 14496, 14104, 21996, 20112, 14152, 14456,
    14608, 17372, 14044, 21172, 24152, 13416, 17072, 24556, 17728, 20892, 24084, 20972, 19432, 16636, 16020, 14364
];

async function pullDataMinedJPEG() {
    const minedJpegAddr = "0x7cd51FA7E155805C34F333ba493608742A67Da8e";

    // Initialize the contract instance
    const { abi } = require("./minedJPEG.json");
    const provider = new ethers.providers.InfuraProvider("homestead", apiKey);
    const minedJPEG = new ethers.Contract(minedJpegAddr, abi, provider);

    // console.log(minedJPEG.interface.events["Mined(address,string)"]);
    // console.log(minedJPEG.interface.events["Transfer(address,address,uint256)"].signature);

    // // Retreive all Mined events
    const minedLogs = await provider.getLogs({
        address: minedJpegAddr,
        fromBlock: ethers.utils.hexValue(13758156),
        toBlock: "latest",
        topics: [ethers.utils.id("Mined(address,string)")]
    });

    // DO NOT RETURN AN ARRAY, BUT RETURN OBJECT WITH MINER ADDRESS AS KEY. IT SHOULD SHOW SEPARATE EVENTS AND AGGREGATED BYTES.
    return Promise.all(
        minedLogs
            .sort((a, b) => a.blockNumber > b.blockNumber)
            .map(async ({ blockNumber, data }, tokenId) => {
                const miner = ethers.utils.getAddress(data.slice(-40));
                const { timestamp } = await provider.getBlock(blockNumber);
                return { miner, timestamp, tokenId, bytes: tokenIdToBytes[tokenId] };
            })
    );
}

module.exports = { pullDataMinedJPEG };
