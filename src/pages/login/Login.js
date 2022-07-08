import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import context from '../../contextApi/ContextApi'
import './Login.css'
import authInfo from '../../authInfo'

export default function Login() {
    const { auth, setAuth } = useContext(context)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [invalid, setInvalid] = useState(false)
    const [blankInput, setBlankInput] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    /////  VALLIDATE LOGIN FORM 
    const submitHandler = (e) => {
        e.preventDefault()
        setBlankInput(false)
        setInvalid(false)
        //// EMPTY INPUT DETAILS
        if (username === '' || password === '') {
            setBlankInput(true)
            return

        }
        ///// INVALID DETAILS ENTERED
        else if (username !== authInfo.username || password !== authInfo.password) {
            setInvalid(true)
            return
        }
        ///// LOGIN SUCCESSFUL
        else {
            setAuth(true)
        }

    }
    useEffect(() => {
        /// IF LOGIN SUCCESSFULL , REDIRECT USER TO HOME PAGE
        if (location.pathname === '/login' && auth) {
            navigate('/home')
        }
    }, [auth, location, navigate])
    
    return (
        <div className='login'>
            <form onSubmit={submitHandler}>
                <input placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                <input placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit' className='s-btn' >Login</button>
                {
                    blankInput && <p>Please enter all fields.</p>
                }
                {
                    invalid && <p>Invalid details.</p>
                }

            </form>
        </div>
    )
}
