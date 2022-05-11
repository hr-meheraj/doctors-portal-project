import React from 'react'
import Cards from './Cards'
import DoctorFeature from './DoctorFeature'
import HeroBanner from './HeroBanner'
import Services from './Services'
import Testimonials from './Testimonials'
import Treatment from './Treatment'
import FeatureForm from './FeatureForm'
import Footer from '../../Shared/Footer'

function Home() {
    return (
        <div className='px-2 md:px-10'>
            <HeroBanner/>
            <Cards/>
            <Services/>
            <Treatment/>
            <DoctorFeature/>
            <Testimonials/>
            <FeatureForm/>
            <Footer/>
        </div>
    )
}

export default Home
