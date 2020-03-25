import React from 'react';
import {Link} from 'react-router-dom'
import { FiPower, FiTrash } from 'react-icons/fi';

import './styles.css'
import logoImg from '../../assets/logo.svg'

function Profile() {
    return (
       <div className="profile-container">
          <header className="">
            <img src={logoImg} alt="Logo"/>
            <span className="">Bem Vindo, OnGNAME</span>
            
            <Link className="button" to="/incidents/new">
              Create a new Incident
            </Link>

            <button type="button" > 
              <FiPower size={16}  color="#e02041"/>
            </button>
          </header>
          <h1>Incidents registered </h1>


          <ul>
            <li>
              <strong>Incident: </strong>
              <p>Incident Test</p>
              
              <strong>Description: </strong>
              <p>Description Test</p>
              
              <strong>Value: </strong>
              <p>$100,00</p>

              <button type="button">
                <FiTrash size={16}  color="#a8a8b3"/>
              </button>

            </li>

            <li>
              <strong>Incident: </strong>
              <p>Incident Test</p>
              
              <strong>Description: </strong>
              <p>Description Test</p>
              
              <strong>Value: </strong>
              <p>$100,00</p>

              <button type="button">
                <FiTrash size={16}  color="#a8a8b3"/>
              </button>

            </li>

            <li>
              <strong>Incident: </strong>
              <p>Incident Test</p>
              
              <strong>Description: </strong>
              <p>Description Test</p>
              
              <strong>Value: </strong>
              <p>$100,00</p>

              <button type="button">
                <FiTrash size={16}  color="#a8a8b3"/>
              </button>

            </li>
            <li>
              <strong>Incident: </strong>
              <p>Incident Test</p>
              
              <strong>Description: </strong>
              <p>Description Test</p>
              
              <strong>Value: </strong>
              <p>$100,00</p>

              <button type="button">
                <FiTrash size={16}  color="#a8a8b3"/>
              </button>

            </li>
          </ul>

       </div> 
    );
}

export default Profile;
