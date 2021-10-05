import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {

    const {transaction} = useContext(GlobalContext)

    return (
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p className='money plus'>+$0.00</p>
            </div>
            <div>
                <h4>Expence</h4>
                <p className='money minus'>-$0.00</p>
            </div>
        </div>
    )
}
