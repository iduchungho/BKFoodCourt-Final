import {z} from 'zod'

const TransactionItem = z.object({
    title : z.string({
        required_error: 'Title is required'
    }),
    price : z.string({
        required_error: 'Price is required'
    }),
    quantity : z.string({
        required_error: 'Quantity is required'
    }),
    itemNote : z.string({
        required_error: 'Note is required'
    })
})

const Transaction = z.object({
    userId: z.string({
        required_error: 'CartUser is required'
    }),
    transactionItem : z.array(TransactionItem),
    typeOfTransaction : z.string({
        required_error: 'TransactionType is required'
    }),
    status: z.string({
        required_error: 'TransactionStatus is required'
    }),
    phone: z.string({
        required_error: 'TransactionPhone is required'
    }),
    address : z.string({
        required_error: 'TransactionAddress is required'
    }),
    note: z.string({
        required_error: 'TransactionNote is required'
    }),
    total : z.string({
        required_error: 'TransactionTotal is required'
    })
})


export type TransactionInfo = z.infer<typeof Transaction>;
export type TransactionItemInfo = z.infer<typeof TransactionItem>;