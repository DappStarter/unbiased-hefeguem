require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install indoor olympic seed curve rare remember arrow grid clinic tail skate'; 
let testAccounts = [
"0x094c0f2f13c9026d3e7193024a5f7f643a9b19286ad6aaf67a72af8bd95acf84",
"0x334e6f55b061a4f792dbeed24e64e634d211b1b120131496dabbfef2f45765df",
"0x4f3ecc95496f2b24c6b21799eed49ae685a708d863aa7faa6bb789022c885871",
"0x463cd8ada9da7334f97ea60cb2c995b0b5f1aa8515d2e221aefa3184ea1fc54e",
"0x69f2cde578ffb60d83afd6ffd13b51d031e6dfecd917345568a8c62d1b1ab5c6",
"0x3a77d1d9fcca5974aee00e3f488c000edf857125209cd2d7cf397cbdfe085c8d",
"0xdf164fc94e753eea825aecb3cefab5127287d489d987531f977c226f64ca2672",
"0x5e595dcf8826622399a1a0d366f62747bd0578a424cbf060ab81d7ce50c29473",
"0x264f7c341806291e686aac545cdece221cfd2dd823035d65b3e37078fabe1ebc",
"0xbababdf297494f583f399f97b7789b3de1c2e62fafcc17d13d79af0178537b80"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
