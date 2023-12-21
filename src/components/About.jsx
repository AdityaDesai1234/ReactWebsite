import React from 'react'
import web from '../img/undraw_Personal_trainer_re_cnua.png'
import Common from './Common'
import {useNavigate} from 'react-router-dom';
function About() {
  const navigate = useNavigate();
  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    navigate('/contact');
  };
  return (
    <Common spanM="About Page" name="✋Welcome To My" imgsrc={web} navigation={navigateToContacts} btnName="Contact Me" />
  )
}

export default About