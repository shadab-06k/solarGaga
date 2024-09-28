import React from 'react'
import Header from '../Header/Header'
import ChooseUs from '../ChooseUs/ChooseUs'
import OurApproach from '../OurApproach/OurApproach'
import ClientTestimonials from '../ClientTestimonials/ClientTestimonials'
import OurNetwork from '../OurNetwork/OurNetwork'
import FAQ from '../FAQ/FAQ'
const Home = () => {
  return (
    <div>
      <ChooseUs/>
      <OurApproach/>
      <OurNetwork/>
      <ClientTestimonials/>
      <FAQ/>
    </div>
  )
}

export default Home
