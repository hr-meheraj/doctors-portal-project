import React from 'react'

function Review(props) {
    const {avater, review, location, name} = props.review;
    return (
        <div className='rounded-md shadow-lg p-4'>
            <p>{review}</p>
            <div className='flex gap-[25px] mt-[20px]'> 
                      <img src={avater} alt={name} className='w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'/> 
                <div>
                    <h4 className='text-2xl font-bold mt-2 mb-3'>{name} </h4>
                    <h2 className='text-xl font-semibold'>{location} </h2>
                </div>
            </div>
        </div>
    )
}

export default Review
