import React from 'react'
import treatment from '../../../assets/images/treatment.png'
import PrimaryButton from '../../Shared/PrimaryButton'
function Treatment() {
    return (
        <div class="hero my-[40px] max-w-[900px] mx-auto">
  <div class="hero-content flex-col lg:flex-row">
    <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" />
    <div className='p-4'>
      <h1 class="text-4xl font-bold">Exceptional Dental <br/> Care, On Your Terms</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
     <PrimaryButton>Get Started</PrimaryButton>
    </div>
  </div>
</div>
    )
}

export default Treatment
