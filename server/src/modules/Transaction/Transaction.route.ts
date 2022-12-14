import express from 'express';
import multer from 'multer'
import { storage } from '../../cloudinary/cloudinary';
import { processRequestBody } from 'zod-express-middleware';
import { requireUser } from '../../middlewares/requireUser';
import catchAsync from '../../utils/catchAsync';
import { TransactionInfo, TransactionItemInfo } from './Transaction.schema';
const transactionRouter = express.Router();

transactionRouter.get('/', (req, res) => {
    res.send("hello world!");
})
export default transactionRouter;  