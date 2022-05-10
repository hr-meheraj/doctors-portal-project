import React from 'react'
import cavity from '../../../assets/images/cavity.png'
import fluoride from '../../../assets/images/fluoride.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';
function Services() {
    const services = [
        {
            _id : 1,
            img : fluoride,
            title : "Fluoride Treatment",
            info : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta repellat minima incidunt!"
        },
        {
            _id : 2,
            img : cavity,
            title : "Cavity Filling",
            info : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta repellat minima incidunt!"
        },
        {
            _id : 3,
            img : whitening,
            title : "Teech Whitening",
            info : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta repellat minima incidunt!"
        }
    ];
    return (
        <div>
            <div className='text-center py-[40px]'>
                <h4 className='text-xl font-bold text-primary mb-2'> Our services</h4>
                <h2 className='text-3xl'> Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-[60px]'>
                {
                    services.map(service => <Service key={services._id} service={service}/>)
                }
            </div>
        </div>
    )
}

export default Services
