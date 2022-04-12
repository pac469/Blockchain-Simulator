import React, { useState, useEffect } from 'react'
import './Main.css'
import Blockchain from '../Blockchain/Blockchain'
import TransactionForm from '../TransactionForm/TransactionForm'
import axios from '../../axios.js'

const Main = () => {

    const [blockchain, setBlockchain] = useState({})

    useEffect(async () => {
        try {
            const createChainResp = await axios.post('/api/blockchain',
                {
                    id: 1,
                    name: "Blockchain 1",
                    genesis: {
                        date: "04/12/2022",
                        transaction: {
                            sender: "Me",
                            receiver: "You",
                            amount: 100
                        }
                    }
                });
            console.log(createChainResp.status)
            if (createChainResp.status !== 200) return
            await getChainResp()
        } catch (err) {
            console.log(err);
        }
    }, [])

    const getChainResp = async () => {
        try {
            const getChainResp = await axios.get('./api/blockchain');
            if (getChainResp.status !== 200) return
            setBlockchain(getChainResp.data.chain.blockchain)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="main">
            <TransactionForm appendBlock={getChainResp} />
            {blockchain.length && <Blockchain blockchain={blockchain} />}

        </div>
    )
}

export default Main