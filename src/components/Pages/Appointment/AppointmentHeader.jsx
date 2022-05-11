import React,{useState} from 'react'
import bg from '../../../assets/images/bg.png'
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
function AppointmentHeader() {
    const [selected, setSelected] = useState(new Date());
    return (
    <div class="hero min-h-screen bg-center bg-cover gap-[30px]" style={{backgroundImage: `url(${bg})`}}>
   <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} class="max-w-xl rounded-lg shadow-2xl" alt="Chair"/>
    <div>
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
    />
    </div>
  </div>
</div>
    )
}

export default AppointmentHeader
