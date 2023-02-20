import React from 'react'
import RightSide from './RightSide'
import LeftSide from './LeftSide'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
  return (
    <div className='flex'>
      <div className='w-full flex-1'>
        <Sidebar />
      </div>
      <div className='flex'>
       {children}
      </div>
    </div>
  )
}

export default Layout