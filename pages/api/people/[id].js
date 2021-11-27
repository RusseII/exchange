
const Tatum = require('@tatumio/tatum');

export default async function handler({ query: { id } }, res) {
  const accounts = await Tatum.getAccountsByCustomerId(id);
  res.status(200).json({ accounts });
}
