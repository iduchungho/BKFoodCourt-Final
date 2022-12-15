import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { getMyTransactions } from '../../../utils/transaction.utils';
import TransactionCell from '../Transactions/TransactionCell';

export default function Receipt() {
    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
        getMyTransactions().then((res) => {
            setTransactions(res);
        })
    }, [])
    return (
        <>
            <Container>
                <h3 className="text-center">
                    Transactions table
                </h3>
                <Table bordered hover>
                    <thead className="bg-secondary text-white">
                        <tr>
                            <th>#</th>
                            <th>TransactionId</th>
                            <th>Status</th>
                            <th>Total price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transactions.map((transaction, index) => {
                                return <TransactionCell transaction={transaction} index={index + 1} type={"personal"} key={transaction.id} />
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        </>
    );
}