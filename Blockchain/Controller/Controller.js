import Block from '../lib/Block.js';
import Blockchain from '../lib/Blockchain.js';

const GlobalChain = new Blockchain();

class Controller {

    constructor() { //dummy constructor
        this.chain = []
    }

    validateRequest = (req, res, next) => { //Function to make sure the inital request has the right format

        if (!req.body) {
            res.status(400).send({
                message: 'Request format is not correct!'
            })
        }

        if (req.body.id && req.body.name && req.body.genesis &&
            req.body.genesis.date && req.body.genesis.transaction) {
            next()
        } else {
            res.status(400).send({
                message: 'Request format is not correct!'
            })
        }

    }

    createNewChain = (req, res) => {
        GlobalChain.create(
            req.body.id,
            req.body.name,
            req.body.genesis
        )
        res.status(200).send({
            message: 'Chain crreated', data: GlobalChain
        })
    }

    appendNewChild = (req, res) => {
        const block = new Block(
            GlobalChain.blockchain.length,
            req.body.timestamp,
            req.body.transaction
        )

        GlobalChain.addNewBlock(block);
        res.status(200).send({
            message: 'block added!'
        })
    }

    getChain = (req, res) => {
        res.status(200).send({
            chain: GlobalChain
        })
    }
}

export default new Controller() //You don't have to do new anymore 