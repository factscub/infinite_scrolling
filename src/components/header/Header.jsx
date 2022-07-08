import './Header.css'
import logo from '../../Assets/lg.png'
import { useLocation, useNavigate } from 'react-router-dom'
import context from '../../contextApi/ContextApi'
import React, { useEffect, useContext } from 'react'

export default function Header() {

  const { auth, setAuth } = useContext(context)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    /////  REDIRECT TO LOGIN PAGE IF USER IS NOT LOGGEDIN
    if (location.pathname === '/home' && !auth) {
      navigate('/login')
    }

  }, [auth, location, navigate])



  const authHandler = () => {
    /////  REDIRECT TO LOGIN PAGE IF USER IS NOT LOGGEDIN
    if (!auth) {
      navigate('/login', { replace: true })
    }
    else {
      setAuth(false)
    }

  }
  return (
    <div className='header'>
      <img className='head-logo' src={logo} alt='list' />
      {
        auth ? <button className='btn' onClick={authHandler} >Logout</button> :
          <button className='btn' onClick={authHandler}>Login</button>
      }
    </div>
  )
}
