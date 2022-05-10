import React from 'react'

function Card({cardInfo}) {
    return (
        <div class={`card card-side bg-secondary stroke-2 text-white p-4 shadow-xl ${(cardInfo._id % 2 === 0) && "bg-[#3A4256]"}`}>
            <figure className='py-2'><img src={cardInfo.img} className='w-[65px]' alt="Movie"/></figure>
                <div class="card-body">
                    <h2 class="card-title">{cardInfo.title}</h2>
                    <p>{cardInfo.description}</p>
                </div>
        </div>
    )
}

export default Card
