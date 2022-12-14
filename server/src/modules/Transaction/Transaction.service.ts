import { TransactionInfo } from './Transaction.schema';
import prisma from "../../utils/prisma";

export const CreateTransaction = async (input : TransactionInfo) => {
    const {
        userId, 
        transactionItem, 
        status, 
        typeOfTransaction, 
        phone, 
        address, 
        note,
        total
    } = input;

    const transaction = await prisma.transaction.create({
        data : {
            userId : userId,
            status: status,
            phone : phone,
            address : address,
            note: note,
            total : total,
            typeOfTransaction: typeOfTransaction
        },
        select : {
            id: true
        }
    })

    for (let i = 0 ; i < transactionItem.length; i++){
        const items = await prisma.transactionItem.create({
            data: {
                title: transactionItem[i].title,
                price: transactionItem[i].price,
                quantity: transactionItem[i].quantity,
                itemNode: transactionItem[i].itemNote,
                transactionID : transaction.id
            }
        })
    }

    return transaction;
}