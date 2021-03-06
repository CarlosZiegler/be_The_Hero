import React , { useState}from 'react';
import {Link , useHistory} from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';
import NumberFormat from 'react-number-format';

import api from '../../services/api'

import './styles.css'
import logoImg from '../../assets/logo.svg'


function NewIncident() {
  const ongId = localStorage.getItem('ongId')
  
  const history = useHistory()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  async function handleNewIncident(e) {
    e.preventDefault()

    const data = {
      title,
      description,
      value
    }
    
    try {
      await api.post('incidents',data, {
        headers: {
          Authorization:ongId
        }
      })
      
      history.push('/profile')

    } catch (error) {
      alert('Error occurred during adding incident')
    }
    
  }

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
              <form onSubmit={handleNewIncident}>
                <input 
                  type="text" 
                  placeholder="Title"
                  value={title}
                  onChange={e => {setTitle(e.target.value)}}
                />
                <textarea  
                  placeholder="Description"
                  value={description}
                  onChange={e => {setDescription(e.target.value)}}
                />
                
                <NumberFormat 
                  thousandSeparator={true} 
                  suffix={'€'} 
                  className="some" 
                  inputMode="numeric"
                  value={value}
                  placeholder="0.00 €"
                  onChange={e => {setValue(e.target.value)}}
                  displayType={'number'}
                  decimalSeparator={"."}
                  />
                  {console.log(value)}
                
                <button className="button" type="submit">Register</button>

              </form>
          </div>
       </div> 
    );
}

export default NewIncident;
