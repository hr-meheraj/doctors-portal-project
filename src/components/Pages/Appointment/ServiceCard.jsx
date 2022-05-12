import React from 'react'

const ServiceCard = ({service}) => {
    const {name, slots} = service;
    
    return(
        <div class="card  shadow-xl">
  <div class="card-body">
    <h2 class="text-center text-xl text-primary">{name}</h2>
    {
        slots.length ? <p className='text-center font-semibold'> {slots[0]} </p> : <p className='text-red-800 text-center font-semibold'> No Service for Today </p>
    }
    {
        slots.length && <p className='py-2 text-primary text-center'> {slots.length} Available Space </p>
    
    }

    <div class="card-actions justify-center">
      <button class="btn btn-sm btn-primary text-white" disabled={slots.length < 1}>Book Now!</button>
    </div>
  </div>
</div>
    )
}

export default ServiceCard;