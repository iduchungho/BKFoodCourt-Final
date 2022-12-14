import express from 'express';
import multer from 'multer'
import { storage } from '../../cloudinary/cloudinary';
import { processRequestBody } from 'zod-express-middleware';
import { requireUser } from '../../middlewares/requireUser';
import catchAsync from '../../utils/catchAsync';
import { TransactionInfo, TransactionItemInfo } from './Transaction.schema';
import { createTransactionController, getAllTransactionsController } from './Transaction.controller';
const transactionRouter = express.Router();

transactionRouter.post('/create', catchAsync(createTransactionController))
transactionRouter.get('/getall', catchAsync(getAllTransactionsController)) 
export default transactionRouter;  