import React,{useState} from 'react'
import bg from '../../../assets/images/bg.png'
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const css = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border:2px solid #3d4451;
    background: #3A4256;
  }
  .my-selected:hover:not([disabled]) { 
    cursor:pointer;
    background:#3d4451;
  }
  .my-today { 
    font-weight: bold;
    font-size: 120%; 
    color: red;
  }
`;
function AppointmentHeader({setSelected}) {
 
    return (
     <>
    <style>{css}</style>
    <div class="hero min-h-screen bg-center bg-cover gap-[30px]" style={{backgroundImage: `url(${bg})`}}>
   <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} class="max-w-xl rounded-lg shadow-2xl" alt="Chair"/>
    <div className='bg-white p-4 rounded-md shadow-xl mr-[10px]'>
    <DayPicker
      mode="single"
      onSelect={setSelected}
      modifiersClassNames={{
        selected: 'my-selected',
        today: 'my-today'
      }}
      modifiersStyles={{
        disabled: { fontSize: '75%' }
      }}
    />
    </div>
  </div>
</div>
</>
    )
}

export default AppointmentHeader
