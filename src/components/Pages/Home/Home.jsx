import React from 'react'
import Cards from './Cards'
import HeroBanner from './HeroBanner'
import Services from './Services'
import Treatment from './Treatment'

function Home() {
    return (
        <div className='px-2 md:px-10'>
            <HeroBanner/>
            <Cards/>
            <Services/>
            <Treatment/>
        </div>
    )
}

export default Home
