var contractAddress = "0x637BB18724BE770346B202A782Bb92EFAE00C51d";
var Web3 = require ('web3');


var WEB3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var ethereum;
window.addEventListener('load', async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
        window.WEB3 = new Web3(ethereum);
        try {
            // Request account access if needed
            await ethereum.enable();
            // Acccounts now exposed
            WEB3.eth.sendTransaction({/* ... */});
        } catch (error) {
            // User denied account access...
        }
    }
    // Legacy dapp browsers...
    else if (window.WEB3) {
        window.WEB3 = new Web3(WEB3.currentProvider);
        // Acccounts always exposed
        WEB3.eth.sendTransaction({/* ... */});
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
});
export default WEB3;