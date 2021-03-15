const axios = require('axios');
const xenditApi = axios.create({ baseURL: `https://api.xendit.co` });
const header = {};

class XenditAPI {
  static async checkDisbursementGetHandler() {
    try {
      return await xenditApi({
        url: '/disbursements',
        method: 'GET',
        headers: header,
      });
    } catch (err) {
      throw (err.response.data);
    };
  }
}

module.exports = XenditAPI;