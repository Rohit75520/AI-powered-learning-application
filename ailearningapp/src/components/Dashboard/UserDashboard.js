import React from 'react'
import Welcome from './Welcome';
import Cards from './Cards';
import Mentor from './Mentor';
import Chatbot from './Chatbot';


const UserDashboard = () => {
  return (
    <div><Welcome/>
    <Cards/>
    <Mentor/>
    <Chatbot/>
    </div>
  )
}

export default UserDashboard;