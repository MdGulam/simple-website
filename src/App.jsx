import React from 'react'
import Navbar from './component/Navbar'
import Sidebar from './component/Sidebar'
import Main from './component/Main'

const App = () => {
  return (
    <>
    <Navbar/>
    
    <div className='flex'>
      <div><Sidebar/></div>
      <div> <Main/> </div>
    </div>
    </>
  )
}

export default App
