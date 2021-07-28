const httpCodes = require('../constants/httpCodes');

class BlockchainController{

    static controllerMethod (req, res) {
        const userMessage = req.body;
        return res.status(200).json(userMessage);
    }
}

module.exports = BlockchainController;