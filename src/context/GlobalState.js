import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer';

const initialState = {
    transactions: [
        {id: 1, text: 'Cvijet', amount: -20},
        {id: 2, text: 'Plata', amount: 300},
        {id: 3, text: 'Knjiga', amount: -10},
        {id: 4, text: 'Kamera', amount: 150}
    ]
}


export const GlobalContext = createContext(initialState);


export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const deleteTransaction = id => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    } 
    const addTransaction = transaction => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    } 

   
    return (<GlobalContext.Provider value = {{
       
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}