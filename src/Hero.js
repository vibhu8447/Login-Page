import React from 'react'
import App from './App';
import './App.css';
 const Hero = ({logOut})=>
 {
     return(
        <>
    <section className="hero">
            <nav>
                <h2>welcome</h2>
                <button onClick={logOut}> logout</button>
            </nav>
            <App></App>
        </section>
        
        </>
     );

 };
  export default Hero;