import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

function Transaction({ transaction_props }) {
    const { deleteTransaction } = useContext(GlobalContext);
    console.log(deleteTransaction)
    const sign = transaction_props.amount > 0 ? '+' : '-'
    return (
        <li className={transaction_props.amount < 0 ? 'minus' : 'plus'}>
            {transaction_props.text} <span> {`${sign}${Math.abs(transaction_props.amount)}`} </span><button onClick={() => deleteTransaction(transaction_props.id)} className='delete-btn'>x</button>
        </li>
    )
}

export default Transaction
