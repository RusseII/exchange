

export default async function handler(req, res) {

  const Tatum = require('@tatumio/tatum');
  
  const algoWallet = await Tatum.generateWallet(Tatum.Currency.ALGO, true);
  res.status(200).json({ algoWallet })
}
