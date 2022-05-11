import React from 'react'
import bg from '../../../assets/images/appointment.png'
const FeatureForm = () => {
    return(
        <div className='mt-[100px]'>
            <div className='bg-center bg-cover w-full py-[30px] rounded-md' style={{backgroundImage:`url(${bg})`}}>
                <div className='max-w-[720px] mx-auto w-[95%]'> 
                    <h4 className='text-xl font-bold text-center text-primary mb-2' >Contact Us </h4>
                    <h2 className='text-4xl font-bold text-center text-white mb-10' >Stay Connecte with Us </h2>
                    <form className='' >
                        <input type='email' required placeholder='your email' className='block w-full rounded-md py-2 px-4 text-gray-200 mb-3'/>
                        <input type='text' required placeholder='Subject' className='block w-full rounded-md py-2 px-4 text-gray-200 mb-3'/>
                        <textarea cols='2' rows='9' required placeholder='Message' className='w-full block rounded-md h-[250px] text-gray-200 mb-3 px-4 py-2' />
                        <div className='text-center'>
                            <input type='submit' value="Submit" className='btn px-6  btn-primary text-white mt-4'/>
                         </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FeatureForm;