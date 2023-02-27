const https = require('https');

(async () => {
    const res = axios.post('https://goerli.infura.io/v3/d31b08a1f844450fb852777f3de12117',{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1});
})();