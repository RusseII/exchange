const externalId = '63379440-2eb1-4c2d-8f70-fd99276ac525';
const customerId = "61a24ab582c0306b03b5d4c7"
export default async function handler(req, res) {
  const Tatum = require('@tatumio/tatum');

  const wallet = await Tatum.generateWallet(Tatum.Currency.ALGO, true);

  // const address = await Tatum.generateAlgodAddressFromPrivatetKey(wallet.secret);

  const account = await Tatum.createAccount(
    {
      currency: Tatum.Currency.ALGO,
      customer: {
        externalId,
      },
    },
    true,
    true
  ).catch((err) => console.log(err));

  // const a = await Tatum.generateAlgodAddressFromPrivatetKey(privateKey)
  res.status(200).json({ account, wallet });
}
