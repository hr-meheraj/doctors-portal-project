import React,{useState} from 'react'
import AppointmentHeader from './AppointmentHeader'
import { format } from 'date-fns';
import AppointmentSerevices from './AppointmentSerevices';

function Appointment() {
    
    const [selected, setSelected] = useState(new Date());
    return (
        <div>
           <AppointmentHeader setSelected={setSelected}/>
           <AppointmentSerevices selected={selected}/>
        </div>
    )
}

export default Appointment
