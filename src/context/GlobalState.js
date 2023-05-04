import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
const initalState ={
    transactions: [
        {id:1, text: 'ex', amount:-10},
        {id:2, text: 'ex', amount:52},
        {id:3, text:'ex', amount: -5},
        {id:4, text:'ex', amount: 32},
    ]
}

export const GlobalContext = createContext(initalState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initalState);


    function deleteTransaction (id) {
        dispatch({
            type: 'Delete_Transaction',
            payload: id
        });
    }

    function addTransaction (transaction) {
        dispatch({
            type: 'Add_Transaction',
            payload: transaction
        });
    }

    return(<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
        </GlobalContext.Provider>);


}