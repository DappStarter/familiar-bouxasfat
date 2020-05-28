require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena fog sugar noodle ribbon remain evil install seek fresh smile'; 
let testAccounts = [
"0xc82cdb3a1ea0e2ad9a498c19aad83e00107afbf37e3db1c57ef41b053b9adeaf",
"0xdc6280fccffa0bc114a1264a6103b05ae53169502ce8df10b44ec050a5f216b5",
"0x2a459ee5353a62e442b979f09b4a5b08746bfe6d55185e6303bf1d9a32d3c62b",
"0x81a4e706c53111185fc426d02c9b33fb366a10dd7a1948333a6c5880d6e9084c",
"0xcd5dd8111a822984564c644ece1b2d4a4af65de686f91122a741e05cc6f9fd2b",
"0x2294e1aaf56a840f7389b47b4b4e2de6ffe8d570bcf224e76cb2867ada723d57",
"0x3634007e964a47c7ac9fba14d6820e36b2b96b63bb0f8feacc0b728bba747e6c",
"0x2efaf5b41bb2545de2f1d14f9475d8af7f8b6212c6957a31d3d42e6664e07cd7",
"0x092967230b49536431c1cf0b497b57a2dd387b2623a57c25779844c2ffeeb78a",
"0x7a4608522867e9af2db2fd6e9fa013ce5461f46e4456b82c39691afc8518f546"
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
