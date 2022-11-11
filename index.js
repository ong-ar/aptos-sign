import { AptosClient, AptosAccount } from 'aptos';

(async () => {
    try {
    const aptosAccount = new AptosAccount(Buffer.from("ada3c5af7dfef2d9bfb04bf187b8ae779be137c9f4c9dff6b776ede3cfb10a64", 'hex'))

    const aptosClient = new AptosClient('https://fullnode.devnet.aptoslabs.com');

    const rawTransaction = await aptosClient.generateTransaction(
        "0xb77fe579498c9e581bff6d0de55d32e1e2ed034fafb68de1542084b58fa07d68",
        {
            arguments: ['0xbb2c6ad5e182bb809eda0b2f9abeb7f0a4aa0edb0892715890a499c68b90d92b', '1000000'],
            function: '0x1::aptos_account::transfer',
            type: 'entry_function_payload',
            type_arguments: [],
        },
        {}
    );

    const signature = await aptosClient.signTransaction(aptosAccount, rawTransaction);

    // console.log(rawTransaction)
    console.log(Buffer.from(signature).toString('hex'))
    } catch(e) {
        console.log(e)
    }
})();

