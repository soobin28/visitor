const PrivateKeyConnector = require('connect-privkey-to-provider')
const NETWORK_ID = '1001' // Baobab Network 고유 ID
const GASLIMIT = '20000000'
const URL = 'https://api.baobab.klaytn.net:8651' // Baobab TestNET
const PRIVATE_KEY = '0x85fd935b93a081ffacd4a39aa803c1cf8b3ffbfa2787a433ed238e81c3da46fc'
module.exports = {
    networks: {
        klaytn: {
            provider: new PrivateKeyConnector(PRIVATE_KEY, URL),
            network_id: NETWORK_ID,
            gas: GASLIMIT,
            gasPrice: null, // Baobab Network 에서 자동으로 값 지정
        }
    }
}