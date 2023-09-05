import Alpaca from '@alpacahq/alpaca-trade-api';

import secrets from '../secrets';

export default new Alpaca({
  keyId: secrets.API_KEY,
  secretKey: secrets.API_SECRET,
  paper: true,
});
