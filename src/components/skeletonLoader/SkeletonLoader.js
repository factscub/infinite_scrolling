import './SkeletonLoader.css'
import React from 'react'
import ContentLoader from 'react-content-loader'

const SkeletonLoader = () => (
  <li className='scard'>
    <ContentLoader
      width={400}
      height={150}
      viewBox="0 0 400 150"
      backgroundColor=" #474787"
      foregroundColor="#5c5ca4"
    >
      <rect x="0" y="0" rx="10" ry="10" width="400" height="150" />
    </ContentLoader>
  </li>
)


export default SkeletonLoader