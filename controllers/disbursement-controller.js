const XenditAPI = require('../api/xendit');
class DisbursementController {
  static async createDisbursementPostHandler(req, res, next) {
    // const {data} = await xenditApi()
  }

  static async getDisbursementHandler(req, res, next) {
    try {
      const { data } = await XenditAPI.checkDisbursementGetHandler();
      res.status(200).json({ data });
    } catch (err) {
      next(err);
    };
  }

}

module.exports = DisbursementController;