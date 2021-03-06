import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Context/GlobalState'

function AddTransaction() {
    const [text, setText] = useState("")
    const [amount, setAmount] = useState('')
    const { AddTransaction } = useContext(GlobalContext);

    const onSubmit = (event) => {
        event.preventDefault();
        const transaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: parseInt(amount)
        }
        AddTransaction(transaction)
        console.log(transaction.id);
        setText("");
        setAmount('')
    }
    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit} >
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
                    <input type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction
