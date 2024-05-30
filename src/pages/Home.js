import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div >
      this is the Home pages
      global dashboard
      <Link to="/dashboard"><button>Dashboard</button></Link>
      register youself
      <Link to="/login"><button>get started</button></Link>
    </div>
  )
}

export default Home
