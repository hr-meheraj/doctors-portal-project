import React from 'react'
import HeroImgChair from '../../../assets/images/chair.png'
import PrimaryButton from '../../Shared/PrimaryButton'
function HeroBanner() {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={HeroImgChair} class="max-w-sm flex-grow-1 rounded-lg shadow-2xl" />
                <div className='flex-grow-1'>
                    <h1 class="text-5xl font-bold">Your new Smile Start Here</h1>
                    <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner
