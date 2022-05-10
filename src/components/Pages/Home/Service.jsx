import React from 'react'

function Service({ service }) {
    const {img, title, info} = service;
    return (
        <div class="card shadow-lg rounded-md">
            <figure class="px-5 pt-5">
                <img src={img} alt="Shoes"/>
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{title}</h2>
                <p>{info}</p>
            </div>
        </div>
    )
}

export default Service
