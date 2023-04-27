import React, { useContext } from 'react';
import './Experience.css';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Cards from '../Cards/Cards';
import Resume from './Resume.pdf'
// import { motion } from 'framer-motion';
import { themeContext } from '../../Context';
const Experience = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // const transition = { duration: 1, type: 'spring' }
  return (
    <div className="experiences" id='eaperience'>
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Experiences</span>
        <span>
          I am passionate about my work. Because I love what I do,
          I have a steady source of motivation that drives me to do my best.
          <br />
          In my previous works, this passion led me to challenge myself daily and learn new skills that helped me to do better work
        </span>
        <a href={Resume} download>
          <button className='button s-button'>Download CV</button>
        </a>
        <div className='blur s-blurl' style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        <div
          
          style={{ left: '14rem' }}>
          <Cards
            emoji={HeartEmoji}
            heading={'Design'}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
          />
        </div>
        <div style={{top:"12rem",left:'-4rem'}}>
          <Cards
            emoji={Glasses}
            heading={'Developer'}
            detail={"Html, Css, JavaScript, react"}
          />
        </div>
        <div style={{top:"19rem",left:"12rem"}}>
          <Cards
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "UI and UX Design play key roles in the experience users have when interacting with digital products and applications"}
            color="rgba(252,166,31,0.45)"
          />
        </div>
        <div className='blur s-blur2' style={{ background: "var(--purple)" }}></div>
      </div>
    </div>
  );
};

export default Experience;