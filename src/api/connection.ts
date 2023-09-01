import Alpaca from '@alpacahq/alpaca-trade-api';

export default new Alpaca({
  keyId: process.env.API_KEY,
  secretKey: process.env.API_SECRET,
  paper: 'PAPER',
});
