import React from 'react'
import web from '../img/hero.png'
import {useNavigate} from 'react-router-dom';
import Common from './Common';
function Home() {
  const navigate = useNavigate();
  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    navigate('/contact');
  };
  return (
    <>
      <Common spanM="Aditya Desai" name="✋Hello I am" imgsrc={web} navigation={navigateToContacts} btnName="Contact Me" />
    </>
  )
}

export default Home