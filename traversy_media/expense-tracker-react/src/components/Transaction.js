import React from 'react'

export const Transaction = ({transactions}) => {

    const sign =transactions.amount < 0 ? '-' : '+';


    return (
        <li className={transactions.amount < 0 ? 'minus' : 'plus'}>
        {transactions.text}<span>{sign}${Math.abs(transactions.amount)}</span><button class='delete-btn'>x</button>
    </li>
    )
}
