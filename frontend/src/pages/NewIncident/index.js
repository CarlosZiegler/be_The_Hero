import React from 'react';
import {Link} from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css'
import logoImg from '../../assets/logo.svg'

function NewIncident() {
    return (
       <div className="new-incident-container">
          <div className="content">
              <section>
                <img src={logoImg} alt="Logo"/>
                <h1>Add new Incident</h1>
                <p> Describe in detail to find a hero to solve this </p>
                <Link className="back-link" to="/profile">
                       <FiArrowLeft size={16}  color="#e02041"/>
                       Back to Home
                </Link>
              </section>
              <form>
                <input type="text" placeholder="Title"/>
                <textarea  placeholder="Description"/>
                <input type="text" placeholder="Value"/>

                <button className="button" type="submit">Cancel</button>
                <button className="button" type="submit">Register</button>
                
              </form>
          </div>
       </div> 
    );
}

export default NewIncident;
