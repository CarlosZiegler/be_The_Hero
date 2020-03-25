import React, {useState} from 'react';
import {Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api'

import './styles.css'
import logoImg from '../../assets/logo.svg'

function Register() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhats] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUF] = useState('')

    const history = useHistory()

    async function handleRegister(e) {
       e.preventDefault()
       
       const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        }
        

        try {
            const response = await api.post('/ongs', data)
            alert(`Your access ID : ${response.data.id}`)
            history.push('/')

        } catch (error) {
            alert(`Error for register, try again`)
        }
        
    }

    return (
       <div className="register-container">
          <div className="content">
              <section>
                <img src={logoImg} alt="Logo"/>
                <h1>Register</h1>
                <p> Make your registration, enter the platform and help people find the cases of your NGO </p>
                <Link className="back-link" to="/">
                       <FiArrowLeft size={16}  color="#e02041"/>
                       Register
                </Link>
              </section>
              <form onSubmit={handleRegister}>
                <input 
                type="text"
                placeholder="NGO Name" 
                value={name} 
                onChange={e => {setName(e.target.value)}}
                />
                <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={e => {setEmail(e.target.value)}}
                />
                <input 
                type="text" 
                placeholder="Whatsapp" 
                value={whatsapp} 
                onChange={e => {setWhats(e.target.value)}}
                />
                <div className="input-group">
                    <input 
                    type="text" 
                    placeholder="City" 
                    value={city} 
                    onChange={e => {setCity(e.target.value)}}
                    />
                    <input 
                    type="text" 
                    placeholder="UF" 
                    value={uf} 
                    onChange={e => {setUF(e.target.value)}}style={{width:80}}
                    />
                </div>

                <button 
                className="button" 
                type="submit">
                    Register
                </button>
                
              </form>
          </div>
       </div> 
    );
}

export default Register;
