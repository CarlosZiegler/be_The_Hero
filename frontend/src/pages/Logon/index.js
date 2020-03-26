import React , { useState}from 'react'
import {Link , useHistory} from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'


import api from '../../services/api'
import './styles.css'

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

function Login() {

    const [id, setId] = useState('')

    const history = useHistory()

    async function handleLogin(e){
        e.preventDefault()
        try {
            const response = await api.post('sessions', {id})
            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName',response.data.name)

            history.push('/profile')
        } catch (error) {
            alert('ID not exists, try again!')
            setId('')
        }
    }

    return (
       <div className="logon-container">
           <section className="form">
               <img src={logoImg} alt="Logo" />
               <form onSubmit={handleLogin} >
                   <h1> Log in </h1>
                   <input 
                   type="text" 
                   placeholder="Your ID" value={id} onChange={e => setId(e.currentTarget.value)}/>
                   <button 
                   className="button" 
                   type="submit" > Enter </button>
                   <Link className="back-link" to="/register">
                       <FiLogIn size={16}  color="#e02041"/>
                       Register
                   </Link>
               </form>
           </section>
           <img src={heroesImg} alt="Heroes" />
           
       </div> 
    );
}

export default Login;
