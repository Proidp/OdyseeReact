import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import Home from '../components/Home';
import logo from '../logo.png';

const Music = () => {

    const [switchToggled, setSwitchToggled] = useState(true);
    const ToggleSwitch = () => {
       
          switchToggled ? setSwitchToggled(false) : setSwitchToggled(true);
          console.log('working screen');
    }
    
    const ToggleSwitch1 = () => {
          switchToggled ? setSwitchToggled(false) : setSwitchToggled(true);
          console.log("Other function exicute");
    }
 
    const MainToggle = () => {
       if(window.innerWidth >= 1151){
          ToggleSwitch();
       }else{
          ToggleSwitch1()
       }
    }



  return (
      <>
      </>
  );
};

export default Music;
