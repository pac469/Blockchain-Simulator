import { Router } from 'express';
import Controller from '../Controller/Controller.js';

var router = Router();

router.post('/blockchain', Controller.validateRequest, Controller.createNewChain) //Create a new chain; will be called in the first load

router.get('/blockchain', Controller.getChain) //Get the chain; call in the first load and everytime a new block is added

router.post('/blockchain/append', Controller.appendNewChild) // Add new block to the chain 

export default router; 