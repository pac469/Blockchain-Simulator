import React, { useEffect } from 'react'
import './Blockchain.css'
import Block from './Block'
import axios from '../../axios';

const Blockchain = ({ blockchain }) => {
    console.log('blockchain prop: ', blockchain)
    return (
        <div className="blockchain__container">
            {
                blockchain.map((blockData) => {
                    const { index, timestamp, transaction, precedingHash, hash } = blockData
                    return (
                        <Block key={index} index={index}
                            timestamp={timestamp}
                            transaction={transaction}
                            precedingHash={precedingHash}
                            hash={hash} />
                    )
                })
            }
        </div>
    )
}

export default Blockchain