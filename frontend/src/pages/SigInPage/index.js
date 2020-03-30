import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api'
import { FirebaseContext } from '../../components/Firebase';
import './styles.css'

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

function Login(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const history = useHistory()

    async function handleLogin(e) {
        e.preventDefault()
        const { firebase } = props
        
        try {
            await firebase.doSignInWithEmailAndPassword(email, password)
            try {
                const response = await api.post('sessions', { email })
                localStorage.clear()
                localStorage.setItem('ongId', response.data.id)
                localStorage.setItem('ongName', response.data.name)

                history.push('/profile')
            } catch (error) {
                setError(error)
                
            }
        } catch (error) {
            setError(error)
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Logo" />
                <form onSubmit={handleLogin} >
                    <h1> Log in </h1>
                    <input
                        type="email"
                        placeholder="Your Email" value={email} onChange={e => setEmail(e.currentTarget.value)} />
                    <input
                        type="password"
                        placeholder="Your Password" value={password} onChange={e => setPassword(e.currentTarget.value)} />
                    <button
                        className="button"
                        type="submit" > Enter </button>
                    {error && <p>{error.message}</p>}
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041" />
                    Register
                   </Link>
                   <Link className="password" to="/resetPassword" >
                        <FiLogIn size={16} color="#e02041" />
                        Forgot password?
                   </Link>
                </form>
                
            </section>
            <img src={heroesImg} alt="Heroes" />

        </div>
    );
}

const SignInPage = () => (
    <div>
        <FirebaseContext.Consumer>
            {firebase => <Login firebase={firebase} />}
        </FirebaseContext.Consumer>
    </div>
);

export default SignInPage;
