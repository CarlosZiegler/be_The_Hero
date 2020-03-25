import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { FiPower, FiTrash } from 'react-icons/fi';

import api from '../../services/api'

import './styles.css'
import logoImg from '../../assets/logo.svg'

function Profile() {

    const [incidents, setIncidents] = useState([])

    const ongName = localStorage.getItem('ongName')
    const ongID = localStorage.getItem('ongId')
    
    useEffect(() => {
      async function fetchIncidents(){
        const response = await api.get('/profile', {
          headers:{
            Authorization:ongID
          }
        })
        setIncidents(response.data)
      }
      fetchIncidents()
    }, [ongID])

    
  

    return (
       <div className="profile-container">
          <header className="">
            <img src={logoImg} alt="Logo"/>
            <span className="">Bem Vindo, {ongName}</span>
            
            <Link className="button" to="/incidents/new">
              Create a new Incident
            </Link>

            <button type="button" > 
              <FiPower size={16}  color="#e02041"/>
            </button>
          </header>
          <h1>Incidents registered </h1>


          <ul>
            {incidents.map(incident =>(
              <li key={incident.id}>
              <strong>Incident: </strong>
              <p>{incident.title}</p>
              
              <strong>Description: </strong>
              <p>{incident.description}</p>
              
              <strong>Value: </strong>
              <p>{ Intl.NumberFormat('de', { style : 'currency', currency:'EUR'}).format(incident.value)}</p>

              <button type="button">
                <FiTrash size={16}  color="#a8a8b3"/>
              </button>

            </li>
            ))}
            

            
          </ul>

       </div> 
    );
}

export default Profile;
