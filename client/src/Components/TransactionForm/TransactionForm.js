import axios from '../../axios.js'
import React, { useState } from 'react'
import './TransactionForm.css'

const TransactionForm = ({ appendBlock }) => {
    const [sender, setSender] = useState('')
    const [receiver, setReceiver] = useState('')
    const [amount, setAmount] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log(new Date().toTimeString(),)
            const resp = await axios.post('api/blockchain/append', {
                date: new Date().toTimeString(),
                transaction: {
                    sender,
                    receiver,
                    amount
                }
            })

            if (resp.status == 200) {
                setSender('')
                setReceiver('')
                setAmount('')
                alert("Transaction Succesful")
                appendBlock()
            } else {
                alert("Transaction was not added")
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            <form className="transaction__form" onSubmit={handleSubmit}>
                <label className="transaction__label">Sender</label>
                <input className="transaction__input"
                    type="text"
                    value={sender}
                    placeholder="i.e Alice"
                    onChange={(e) => setSender(e.target.value)}
                    required />

                <label className="transaction__label">Receiver</label>
                <input className="transaction__input"
                    type="text"
                    value={receiver}
                    placeholder="i.e Bob"
                    onChange={(e) => setReceiver(e.target.value)}
                    required />

                <label className="transaction__label">Amount</label>
                <input className="transaction__input"
                    type="number"
                    value={amount}
                    placeholder="10"
                    onChange={(e) => setAmount(e.target.value)}
                    min="1"
                    required />
                <button type="submit"> Add Transaction </button>
            </form>
        </div>
    )
}

export default TransactionForm