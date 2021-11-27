const customerId = '61a24ab582c0306b03b5d4c7';

const Tatum = require('@tatumio/tatum');

export default async function handler(req, res) {
  const accounts = await Tatum.getAccountsByCustomerId(customerId)
  res.status(200).json({ accounts });
}
