import React, { useContext } from 'react'
import './Footer.css'

import { Typewriter } from 'react-simple-typewriter';
function Footers() {

    const shortname = (name) => {
        if(name.length > 10) {
            return name.split(" ")[0]
        } else {
            return name
        }
    }
   return (
        <div className="footer" style={{backgroundColor: "black" }}>
            <span style={{ color: 'white', fontWeight: 'bold' }}>
          
          <Typewriter
            words={['Made with 💙 by Chandrashekhar Joshi']}
            loop={5000000000}
            cursor
            cursorStyle='|'
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={2000}
           
          />
        </span>
        </div>
    )
}

export default Footers

