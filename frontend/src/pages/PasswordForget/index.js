import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';

import { FirebaseContext } from '../../components/Firebase';
import './styles.css'

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'


function PasswordForgetFormBase(props) {

    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    const isInvalid = email === '';

    const history = useHistory()

    async function handlePasswordRcovery(e) {
        e.preventDefault()
        const { firebase } = props
        
        try {
            await firebase.doPasswordReset(email)
            try {
                alert(`We are forwarding an email for ${email} to reset your password. Check your inbox. Thanks`)
                history.push('/')
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
                <form onSubmit={handlePasswordRcovery} >
                    <h1> Reset your password. </h1>
                    <input
                        type="email"
                        placeholder="Your Email" 
                        value={email} 
                        onChange={e => setEmail(e.currentTarget.value)} />
                    <button
                        className="button"
                        disabled={isInvalid}
                        type="submit" > Send </button>
                    {error && <p>{error.message}</p>}
                </form>
                <Link className="back-link" to="/">
                       <FiArrowLeft size={16}  color="#e02041"/>
                       Back to Home
                </Link>
                
            </section>
            <img src={heroesImg} alt="Heroes" />

        </div>
    );
}

const PasswordForgetPage = () => (
    <div>
        <FirebaseContext.Consumer>
            {firebase => <PasswordForgetFormBase firebase={firebase} />}
        </FirebaseContext.Consumer>
    </div>
);

export default PasswordForgetPage;
