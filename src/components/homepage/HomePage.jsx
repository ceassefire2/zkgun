import React from 'react'
import Hero from '../Hero'
import Finance from '../Finance'
import OurEcosystem from '../OurEcosystem'
import CoreValue from '../CoreValue'
import OurCapabilities from '../OurCapabilities'
import Discover from '../Discover'
import Decentralized from '../Decentralized'
import JoinZkgun from '../JoinZkgun'

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
            </div>
        </>
    )
}

export default HomePage