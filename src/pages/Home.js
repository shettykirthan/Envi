import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import InfoDetailHome from './info_detail_home'
import { Info } from 'react-feather'
import '../index.css'

const Home = () => {
  return (
    <div >
      <Navbar></Navbar>
      <hr color='lightgrey'></hr>
      <InfoDetailHome />

      <div className='details_container'>
        <div class="card card1">
          <h2 className='home_h2'>How this works?</h2>
          <p>Our platform utilizes advanced algorithms to accurately calculate carbon footprints based on user inputs regarding electricity usage, water consumption, vehicle usage, and other relevant details.
            Users simply input their data into our user-friendly interface, and our system generates a comprehensive report detailing their carbon emissions across various categories.
          </p>
        </div>
        <div class="card card2">
          <h2 className='home_h2'>Features</h2>
          <ul>
            <li>Global PowerBI Dashboard: Access real-time global data on carbon emissions</li>
            <li>Interactive Chatbox: Engage with like-minded individuals, share tips, and collaborate on eco-friendly initiatives within our vibrant community.</li>
            <li>Comparative Analysis: Compare your carbon emissions with country or world averages</li>

          </ul>
        </div>
        <div class="card card3">
          <h2 className='home_h2'>Our mission</h2>
          <p>At EnviPro, our mission is simple: empower individuals to combat climate change by providing accessible tools to understand, measure, and reduce carbon footprints. Through collaboration and community engagement, we're committed to creating a more sustainable future for everyone</p>
        </div>

      </div>
      <div className='buttons'>
      <div className='button2_container'>
        <Link to="/login"><button className='button2'>Get Started</button></Link>
        </div>
      </div>
      
    </div>
  )
}

export default Home


