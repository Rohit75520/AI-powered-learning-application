import React from 'react'
import Welcome from './Welcome';
import Cards from './Cards';
import Mentor from './Mentor';

import Bot from './Bot';
import Chatbot from '../Chatbot/Chatbot';


const UserDashboard = () => {
  return (
    <div><Welcome/>
    <Cards/>
    <Mentor/>
    
    <Bot/>
    </div>
  )
}

export default UserDashboard;