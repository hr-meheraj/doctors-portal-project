import React from 'react'
import { format } from 'date-fns';
function AppointmentModal({setModalData,modalData,selected}) {
    const {name, slots} = modalData;
    const handlingBooking = e => {
        e.preventDefault();
        const phone = e.target.phone.value;
        const email = e.target.email.value;
        const slot = e.target.slot.value;
        const fullName = e.target.fullName.value;
        const bookingInfo = {
            phone, email, slot, fullName
        }
        console.log(bookingInfo);
        setModalData(null);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
  <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="font-bold text-lg">{name}</h3>
    <form onSubmit={handlingBooking} className='grid mt-[20px] gap-[20px] justify-items-center'> 
        <input type="text" value={format(selected, 'PP')} disabled class="input input-bordered w-full max-w-xs" />
        <select class="select select-bordered w-full max-w-xs" name="slot">
            <option disabled>What Time you want?</option>
            {
                slots.map( (slot, index) => <option key={slot} selected={ index == 0 }>{slot}</option>)
            }
        </select>
        <input required type="text" placeholder="Full Name" class="input input-bordered w-full max-w-xs" name="fullName"/>
        <input required type="text" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" name="phone"/>
        <input required type="email" placeholder="Email" class="input input-bordered w-full max-w-xs" name="email"/>
        <input type="submit" value="Submit" class="btn btn-primary text-white w-full max-w-xs" />
        
    </form>
  </div>
</div>
        </div>
    )
}

export default AppointmentModal
