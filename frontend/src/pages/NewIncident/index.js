import React from 'react';
import {Link} from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css'
import logoImg from '../../assets/logo.svg'

function NewIncident() {
    return (
       <div className="register-container">
          <div className="content">
              <section>
                <img src={logoImg} alt="Logo"/>
                <h1>Add new Incident</h1>
                <p> Make your registration, enter the platform and help people find the cases of your NGO </p>
                <Link className="back-link" to="/">
                       <FiArrowLeft size={16}  color="#e02041"/>
                       Register
                </Link>
              </section>
              <form>
                <input type="text" placeholder="NGO Name"/>
                <input type="email" placeholder="Email"/>
                <input type="text" placeholder="Whatsapp"/>
                <div className="input-group">
                    <input type="text" placeholder="City"/>
                    <input type="text" placeholder="UF" style={{width:80}}/>
                </div>

                <button className="button" type="submit">Register</button>
                
              </form>
          </div>
       </div> 
    );
}

export default NewIncident;
