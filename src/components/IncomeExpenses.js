import React,{ useContext }  from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);

    const amount = transactions.map(transaction => transaction.amount);
    let income = 0;
    let expense = 0;
    const devide = amount.forEach(el => el >= 0 ? income += el : expense += el);
    

    return (
        <div className='inc-exp-container'>
            <div>
                <h4>Prihod</h4>
                <p className='money plus'>+BAM{income}</p>
            </div>
            <div>
                <h4>Rashod</h4>
                <p className='money minus'>-BAM{Math.abs(expense)}</p>
            </div>
        </div>
    )
}
