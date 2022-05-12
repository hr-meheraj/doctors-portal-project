import React,{useState, useEffect } from 'react'
import { format } from 'date-fns';
import ServiceCard from './ServiceCard'
import AppointmentModal from './AppointmentModal';

function AppointmentSerevices({selected}) {
    const [services,setServices] = useState([]);
    const [modalData, setModalData] = useState(null);
    useEffect(() => {
        fetch('services.json')
        .then( res => res.json())
        .then( data => setServices(data))
        .catch( err => alert(err.message));
    },[])
    return (
        <div className='my-[70px]'>
            <p className='text-primary mb-[40px] text-xl text-center font-semibold'>Available Appointment on {format(selected, 'PP')} </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <ServiceCard key={service._id} setModalData={setModalData} service={service}/>)
                }
            </div>
            {
                modalData && <AppointmentModal modalData={modalData} setModalData={setModalData} selected={selected}/>
            }
        </div>
    )
}

export default AppointmentSerevices



