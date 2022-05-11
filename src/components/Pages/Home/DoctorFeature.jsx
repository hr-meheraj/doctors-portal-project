import React from 'react'
import doctor from '../../../assets/images/doctor.png'
import PrimaryButton from '../../Shared/PrimaryButton'
import appointment from '../../../assets/images/appointment.png'
function DoctorFeature() {
    return (
        <div className='my-[80px]  bg-cover bg-center rounded-md' style={{backgroundImage: `url(${appointment})`}}>
            <div className='flex justify-center items-center'>
                <div className='lg:w-6/12 w-full lg:block hidden'>
                    <img src={doctor} className=' lg:block mt-[-100px] w-[100%]'/>
                </div>
                <div className='lg:w-6/12 w-full py-[30px] px-[20px]'>
                    <h3 className='text-4xl text-primary mb-3'>MAKE YOUR APPOINTMENT</h3>
                    <p className='text-white mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente temporibus laboriosam placeat modi deleniti accusamus laudantium quisquam vel officiis ducimus corporis iste atque, enim ipsum maxime tempore blanditiis qui incidunt dolor mollitia fugiat autem possimus id. Accusantium dolorem dolorum enim.</p> 
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    )
}

export default DoctorFeature
