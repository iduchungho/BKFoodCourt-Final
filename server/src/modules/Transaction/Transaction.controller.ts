import { TransactionInfo, TransactionItemInfo } from "./Transaction.schema";
import { NextFunction, Request, Response } from "express";
import { CreateTransaction, getAllTransactions } from "./Transaction.service";
import { StatusCodes } from "http-status-codes";
import ExpressError from "../../utils/expressError";

export const createTransactionController = async (req: Request<{},{},TransactionInfo>, res : Response, next: NextFunction) => {
    const newTransaction = await CreateTransaction(req.body);
    if(!newTransaction){
        return next(new ExpressError('Transaction not created', StatusCodes.BAD_REQUEST));
    }
    res.status(StatusCodes.CREATED).send(newTransaction);
}
export const getAllTransactionsController = async (req: Request, res: Response, next: NextFunction) => {
    const allTrans = await getAllTransactions();
    res.send(allTrans);
}