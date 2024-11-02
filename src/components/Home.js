import React from 'react'
import Center from './Center'
import ChatInput from './ChatInput'
import Sidebar from './Sidebar'


const Home = () => {
  return (
    <div>
    <Sidebar/>
    <Center/>
    <ChatInput/>
    </div>
  )
}

export default Home