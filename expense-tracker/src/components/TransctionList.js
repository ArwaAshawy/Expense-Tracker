import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transction from './Transction'

function TransctionList() {
    const {transactions} = useContext(GlobalContext)

    console.log(transactions)
    return (
        <>
            <h3>History</h3>
            <ul className="list">
            {transactions.map(transaction => <Transction transaction={transaction} key={transaction.id}/>)}
            </ul>
        </>
    )
}

export default TransctionList
