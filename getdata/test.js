const { pullDataMinedJPEG, getENS } = require("./utilities");

(async () => {
    // Get all the miners of Mined JPEG and their mining events
    const minedJpegData = await pullDataMinedJPEG();

    // Add ENS name if available
    for (const addr in minedJpegData) {
        let ENS = await getENS(addr);
        if (ENS !== null) minedJpegData[addr] = { mints: minedJpegData[addr], ENS };
        else minedJpegData[addr] = { mints: minedJpegData[addr] };
    }

    console.log(minedJpegData);
})();
