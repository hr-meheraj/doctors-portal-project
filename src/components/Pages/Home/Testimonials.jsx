import React from 'react'
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from './Review'
function Testimonials() {
    const reviews = [
        {
            _id : 1,
            review : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis quis cupiditate amet, vero nam doloribus ex cumque fugit possimus quibusdam odio magnam minus voluptate tempora laborum eligendi a nostrum iure.",
            name : "John Smith",
            location : "Massacusset",
            avater : people1
        },
        {
            _id : 2,
            review : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis quis cupiditate amet, vero nam doloribus ex cumque fugit possimus quibusdam odio magnam minus voluptate tempora laborum eligendi a nostrum iure.",
            name : "Jackson",
            location : "Californaia",
            avater : people2
        },
        {
            _id : 3,
            review : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis quis cupiditate amet, vero nam doloribus ex cumque fugit possimus quibusdam odio magnam minus voluptate tempora laborum eligendi a nostrum iure.",
            name : "Hr Meheraj",
            location : "Florida",
            avater : people3
        },
    ];
    return (
        <div>
            <div className='flex justify-between gap-[20px] py-[20px]'>
                <div className='w-9/12'>
                    <h4 className='text-primary text-xl font-bold uppercase mb-3'>Our Testimonials </h4>
                    <h2 className='text-4xl'>What, Our Patient Says </h2>
                </div>
                <div className='w-3/12 flex justify-end'>
                    <img src={quote} className='w-[192px]' alt="Quote"/>
                </div>
            </div>
            <div className='grid grid-cols-1  gap-5 lg:grid-cols-3 md:grid-cols-2 mt-[40px]'>
                {
                    reviews.map(review => <Review key={review._id} review={review}/>)
                }
            </div>
        </div>
    )
}

export default Testimonials
