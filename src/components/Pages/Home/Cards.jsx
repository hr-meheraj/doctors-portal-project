import React from 'react'
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import Card from './Card'
function Cards() {
    const cards = [
        {
            _id : 1,
            title : "Opening Hour",
            description : "Open our treatment every hours available.",
            img : clock
        },
        {
            _id : 2,
            title : "Visit Our Localtion",
            description : "USA, California City, 43",
            img : marker
        },
        {
            _id : 3,
            title : "Contact us Now",
            description : "+1 8222 9555 234",
            img : phone
        }
    ]
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-[90px]'>
            {
            cards.map(card => <Card key={card._id} cardInfo={card}/>)
            }
        </div>
    )
}

export default Cards
