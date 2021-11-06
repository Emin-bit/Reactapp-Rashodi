import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
   const { transactions } = useContext(GlobalContext);
   
   
   const amounts = transactions.map(transaction => transaction.amount);
   let total = 0;
   amounts.forEach(el => total += el); 
   
   

   return (
        <>
            <h4>Vaš balans</h4>
            <h1>BAM{total}</h1>

        </>
    )
}
