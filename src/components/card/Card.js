import React from 'react'
import './Card.css'

export default function Card({singleUser}) {
    const {name, email,phone, picture}=singleUser
  
  return (
    <li className='card'>
        <div className='details'>
        <p>{`${name.title}. ${name.first} ${name.last}`}</p>
        <p>{email}</p>
        <p>{phone}</p>
        </div>
        <div className='pic'>
        <img src={picture.large} alt='userpic'/>
        </div>

    </li>
  )
}
