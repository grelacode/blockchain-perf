const { SUCCESS } = require('../constants/httpCodes');

class BlockchainController{

    static controllerMethod (req, res) {
        const userMessage = req.body;
        return res.status(SUCCESS).json(userMessage);
    }
}

module.exports = BlockchainController;