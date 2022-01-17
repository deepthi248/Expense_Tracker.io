import React from 'react'
import { useContext } from 'react/cjs/react.development'
import { GlobalContext } from '../Context/GlobalState'

function IncExp() {
    const { transactions } = useContext(GlobalContext)
    const amounts = transactions.map(transaction => transaction.amount)

    const positive = amounts.filter(item => item > 0).reduce((acc, item) => acc += item, 0).toFixed(2);
    const negative = amounts.filter(item => item < 0).reduce((acc, item) => acc += item, 0).toFixed(2);
    return (

        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">${positive}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">${negative}</p>
            </div>
        </div>

    )
}

export default IncExp
