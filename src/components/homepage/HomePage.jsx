import React from 'react'
import Hero from '../Hero'
import Finance from '../Finance'
import OurEcosystem from '../OurEcosystem'
import CoreValue from '../CoreValue'
import OurCapabilities from '../OurCapabilities'
import Discover from '../Discover'
import Decentralized from '../Decentralized'
import JoinZkgun from '../JoinZkgun'
import ContractDetails from "../ContractDetails";


const HomePage = () => {
    return (
        <>
            <div className="overflow-x-clip">
                <Hero />
                <Finance />
                <OurEcosystem />
                <CoreValue />
                <OurCapabilities />
                <Discover />
                <Decentralized />
                <JoinZkgun />
                <ContractDetails />
            </div>
        </>
    )
}

export default HomePage