import React from 'react'
import './Block.css'

const Block = ({ index, timestamp, transaction, precedingHash, hash }) => {

    return (
        <div className="block__container">
            <div className='block__info'>
                <p><span>Index: </span> {index} </p>
                <p><span>timestamp: </span> {timestamp} </p>
                <p><span>Prev Hash: </span> {precedingHash}</p>
                <p><span>Block Hash: </span> {hash}</p>
            </div>
            <div>
                <h3>Transaction Info</h3>
                <div className='block__transaction'>
                    <p><span>Sender: </span> {transaction.sender}</p>
                    <p><span>Receiver: </span> {transaction.receiver} </p>
                    <p> <span>Amount: </span> {transaction.amount}</p>
                </div>
            </div>


        </div>
    )
}

export default Block