import React from 'react'
import HeroImgChair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import PrimaryButton from '../../Shared/PrimaryButton'
function HeroBanner() {
    return (
        <div class="hero mt-[40px]">
            <div class="hero-content flex-col lg:flex-row-reverse pt-16 py-[120px] bg-center bg-cover" style={{backgroundImage:`url(${bg})`}}>
                <img src={HeroImgChair} class="max-w-sm md:max-w-lg rounded-lg shadow-2xl" alt="Hero Banner" />
                <div>
                    <h1 class="text-5xl font-bold">Your new Smile Start Here</h1>
                    <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner
