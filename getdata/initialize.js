const ethers = require("ethers");
const axios = require("axios");

const apiKey = "d31b08a1f844450fb852777f3de12117";

(async () => {
    const minedJpegAddr = "0x7cd51FA7E155805C34F333ba493608742A67Da8e";

    // Initialize the contract instance
    const { abi } = require("./JPEGminer.json");
    const provider = new ethers.providers.InfuraProvider("homestead", apiKey);
    const minedJPEG = new ethers.Contract(minedJpegAddr, abi, provider);

    console.log(minedJPEG.interface.events["Mined(address,string)"]);
    console.log(minedJPEG.interface.events["Transfer(address,address,uint256)"].signature);

    // // Retreive all Mined events
    const minedLogs = await provider.getLogs({
        address: minedJpegAddr,
        fromBlock: ethers.utils.hexValue(13758156),
        toBlock: "latest",
        topics: [ethers.utils.id("Mined(address,string)")]
    });
    console.log(minedLogs);
})();
