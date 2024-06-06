import React from 'react'
import Navbar from '../components/Navbar'


const dashboard = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='dashboard_container'>
      <iframe title="Carbon Emission general dashboard" width="1550" height="600" src="https://app.powerbi.com/reportEmbed?reportId=4c05f11e-283a-401a-bd0c-06ddef7d43f7&autoAuth=true&ctid=ab30bab1-1dec-4883-b936-ec8037868493" frameborder="0" allowFullScreen="true"></iframe>
     </div>
    </div>
  )
}

export default dashboard