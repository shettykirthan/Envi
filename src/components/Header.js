import React from 'react'
import { useAuth } from '../utils/AuthContext'
import { Link } from 'react-router-dom'
import { LogOut, LogIn } from 'react-feather'
import "../pages/Room/Room.css"

const Header = () => {
    const {user, handleLogout} = useAuth()
  return (
    <div id="header--wrapper">
        {user ? (
            <>
                Welcome {user.name}
                <Link to="/user"><LogOut className="header--link" /></Link>
            </>
        ): (
            <>
                <Link to="/">
                    <LogIn className="header--link"/>
                </Link>
            </>
        )}
    </div>
  )
}

export default Header