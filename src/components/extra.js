import React from 'react';
import background from './images/scene.jpeg';

function extra() {
  return (
    <div style={{ 
        backgroundImage: `url(${background})`, 
        backgroundSize: 'cover', 
        height: '100vh', 
        fontFamily: 'Fira Sans, sans-serif',
        textAlign: 'center',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh',
        color: 'black',
        textShadow: '0 0 10px rgba(255, 255, 255, 0.7)'
      }}>
        <h3 style={{fontSize:'8vw', marginBottom:'10px','letter-spacing': '2.2px'}}>MOUNESHA ZONDE</h3>
        <div>
          <h6 style={{fontSize:'22px', marginTop:'10px','letter-spacing': '2.2px', color: 'black' ,
          textShadow: '0 0 5px rgba(255, 255, 255, 0.7)'}}>FULLSTACK DEVELOPER, FRONTEND AND BACKEND DEVELOPER</h6>
        </div>
      </div>
  )
}

export default extra