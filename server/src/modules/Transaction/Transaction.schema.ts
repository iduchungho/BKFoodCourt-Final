import {z, ZodString} from 'zod'

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
    CartUser: z.string({
        required_error: 'CartUser is required'
    }),
    transactionItem : z.array(TransactionItem),
    
    
})
