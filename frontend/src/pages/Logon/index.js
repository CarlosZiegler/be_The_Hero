import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import './styles.css'

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

function Login() {
    return (
       <div className="logon-container">
           <section className="form">
               <img src={logoImg} alt="Logo" />
               <form action="">
                   <h1> Log in </h1>
                   <input type="text" placeholder="Your ID"/>
                   <button className="button" type="submit" > Enter </button>
                   <a href="/register">
                       <FiLogIn size={16}  color="#e02041"/>
                       Register
                   </a>
               </form>
           </section>
           <img src={heroesImg} alt="Heroes" />
       </div> 
    );
}

export default Login;
