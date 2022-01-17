import React from 'react'
import Transaction from './Transaction'
import { GlobalContext } from '../Context/GlobalState'
import { useContext } from 'react/cjs/react.development'
function TransactionsList() {
    const { transactions } = useContext(GlobalContext)

    return (

        <div>
            <h3>History</h3>
            <ul className="list">
                {
                    transactions.map(transaction => {
                        return (<Transaction key={transaction.id} transaction_props={transaction} />)

                    })
                }
            </ul>
        </div>
    )
}

export default TransactionsList
