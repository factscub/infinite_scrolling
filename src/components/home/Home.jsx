import React, { useEffect, useState } from 'react';
import './Home.css'
import axios from 'axios'
import { API_URL } from '../../fakeApi'
import Card from '../card/Card';
import SkeletonLoader from '../skeletonLoader/SkeletonLoader';

///// no. of users to be served PER EACH PAGE  
//// and count the no.of data elements which are shown on the screen.
const perPage = 15
let currentCount = 0

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [userData, setUserData] = useState([])
  const [totalResults, setTotalResults] = useState(0)
  const [currentData, setCurrentData] = useState([])

///// fetching USERDATA from api endpoint.
  const fetchData = async () => {
    setLoading(true)
    const data = await axios.get(API_URL)
    setUserData(data.data.results)
    setTotalResults(data.data.info.results)
    setLoading(false)
  }


  const fetchSingle = (currentCount) => {
    setCurrentData(prev => ([...prev, userData[currentCount]]))
  }

  ///// loadpage function will be invoked each time 
  ///// when the loadmore button is clicked or the page loads first time.
  const loadPage = () => {
    for (let i = 1; i <= perPage && currentCount < totalResults; i++) {
      fetchSingle(currentCount)
      currentCount++
    }
  }
 
  useEffect(() => {
    if (userData.length === 0) fetchData()
    if (currentData.length === 0) loadPage()
  }, [userData, currentData])

  return (
    <div className='home'>
      <ul className='cardlist'>
        {/* EACH USER'S CARD DETAILS */}
        {currentData.map((singleUser, i) => <Card key={i} singleUser={singleUser} />)
        }
      </ul>
      {

      }

      
      {/* SKELETON LOADER */}
      <ul className='cardlist'>
        {
          loading && Array(9)
            .fill()
            .map((item, key) => (
              <SkeletonLoader key={key} />
            ))
        }
      </ul>

      {/* LOADMORE BUTTON */}
      {
        (!loading && totalResults >= currentCount) && <button className='loadmore' onClick={() => {
          setLoading(true)
          setTimeout(() => {
            loadPage()
            setLoading(false)
          }, 1000)
        }}>Load More</button>
      }

    </div>
  )
}
