import React from 'react'
import './OurNetwork.css'
import projectImage from '../../assets/projectImage.gif';
import systemImage from '../../assets/systemOwner.gif'; 
import buyerImage from '../../assets/buyer.gif';  
const OurNetwork = () => {
  return (
    <div className='ourNetwork text-center'>
      <h1><svg xmlns="http://www.w3.org/2000/svg" width="140" height="4" viewBox="0 0 140 4" fill="none">
<path d="M0 2H140" stroke="#222831" stroke-width="3"/>
</svg>USER NETWORK<svg xmlns="http://www.w3.org/2000/svg" width="140" height="4" viewBox="0 0 140 4" fill="none">
<path d="M0 2H140" stroke="#222831" stroke-width="3"/>
</svg></h1>
      <p>Establishing a network of varied users and tailoring access to enhance productivity for each.</p>
      <div className='ourNetwork-cards'>
      <div className='ourNetwork-card ourNetwork-card0'>
        <h2>Project<br/> Developer</h2>
        <p>Developers focused on projects aimed at avoiding, reducing, or removing greenhouse gas emissions.</p>
        <img src={projectImage}/>
      </div>
      <div className='ourNetwork-card ourNetwork-card1'>
        <h2>System <br/>Owners</h2>
        <p>Owners of Renewable Energy Systems across residential, commercial and industrial sectors.</p>
        <img src={systemImage}/>
      </div>
      <div className='ourNetwork-card ourNetwork-card2'>
        <h2>Market<br/> Buyers</h2>
        <p>Enterprises and Organisations looking to offset their carbon emissions or reduce scope 2 emissions.</p>
        <img src={buyerImage}/>
      </div>
      </div>

    </div>
  )
}

export default OurNetwork
