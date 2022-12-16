import { useEffect } from "react";
import { useState } from "react"
import { Table } from "react-bootstrap"
import { getAllTransactions } from "../../../utils/transaction.utils";
import TransactionCell from "./TransactionCell";
import './style.css';

function Transactions() {
    const [transactions, setTransactions] = useState([]);
    
    useEffect(() => {
        getAllTransactions().then((res) => {
            setTransactions(res);
        })
    },[])
    return (
        <>
            <h3 className="text-center">
                Transactions table
            </h3>
            <div className="trans__">
                <Table bordered hover>
                    <thead className="bg-secondary text-white">
                        <tr>
                            <th>#</th>
                            <th>Thông tin khách hàng</th>
                            <th>Mã đơn hàng</th>
                            <th>Tình trạng</th>
                            <th>Tổng tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transactions.map((transaction, index) => {
                                return <TransactionCell transaction={transaction} index={index + 1} key={transaction.id} />
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </>

    )
}

export default Transactions