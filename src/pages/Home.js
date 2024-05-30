import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div >
      <Navbar></Navbar>
      this is the Home pages
      global dashboard
      <Link to="/dashboard"><button>Dashboard</button></Link>
      register youself
      <Link to="/login"><button>get started</button></Link>
    </div>
  )
}

export default Home
