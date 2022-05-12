import React,{useState} from 'react'
import AppointmentHeader from './AppointmentHeader'
import { format } from 'date-fns';
import AppointmentSerevices from './AppointmentSerevices';
import Footer from '../../Shared/Footer';

function Appointment() {
    
    const [selected, setSelected] = useState(new Date());
    return (
        <div>
           <AppointmentHeader setSelected={setSelected}/>
           <AppointmentSerevices selected={selected}/>
           <Footer/>
        </div>
    )
}

export default Appointment
