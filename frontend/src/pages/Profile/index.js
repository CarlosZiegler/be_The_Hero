import React, { useState, useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom'
import { FiPower, FiTrash } from 'react-icons/fi';

import api from '../../services/api'

import './styles.css'
import logoImg from '../../assets/logo.svg'
import emptyImg from '../../assets/emptyB.png'

function Profile() {

    const [incidents, setIncidents] = useState([])
    const history = useHistory()

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

    async function handleDeleteIncident(id) {
      try {
        await api.delete(`incidents/${id}`, {
          headers: { 
            Authorization: ongID
          }
        })
        setIncidents(incidents.filter(incident => incident.id !== id))
      } catch (error) {
        alert('Error a deleting incident, try again')
      }
    }

    function handleLogout() {
      localStorage.clear()
      history.push('/')
    }
  

    return (
       <div className="profile-container">
          <header className="">
            <img src={logoImg} alt="Logo"/>
            <span className="">Welcome, {ongName}</span>
            
            <Link className="button" to="/incidents/new">
              Add incident
            </Link>

            <button type="button" onClick={handleLogout}> 
              <FiPower size={16}  color="#e02041"/>
            </button>
          </header>
          {incidents.length > 0 && (<>
            <h1>Incidents registered </h1>
        </>)}
          
          {incidents.length < 1 && (<>
          <center>
          <h1>You have not incidents registered. </h1>
            <img src={emptyImg} style={{width: '50%'}} alt="Logo"/>
          </center>
          
        </>)}
          <ul>
            {incidents.map(incident =>(
              <li key={incident.id}>
              <strong>Incident: </strong>
              <p>{incident.title}</p>
              
              <strong>Description: </strong>
              <p>{incident.description}</p>
              
              <strong>Value: </strong>
              <p>{ Intl.NumberFormat('de', { style : 'currency', currency:'EUR'}).format(incident.value)}</p>

              <button type="button" onClick={()=> handleDeleteIncident(incident.id)}>
                <FiTrash size={16}  color="#a8a8b3"/>
              </button>

            </li>
            ))}
            

            
          </ul>

       </div> 
    );
}

export default Profile;
