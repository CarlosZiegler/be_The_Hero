import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';

import { FirebaseContext } from '../../components/Firebase';
import './styles.css'

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'


function PasswordChangeFormBase(props) {

    const [passwordOne, setPasswordOne] = useState('')
    const [passwordTwo, setPasswordTwo] = useState('')
    const [error, setError] = useState('')

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === ''
      
    const history = useHistory()

    async function handlePasswordRecovery(e) {
        e.preventDefault()
        const { firebase } = props
        
        try {
            await firebase.doPasswordUpdate(passwordOne)
            try {
                alert(`Your password has been updated successfully.`)
                history.push('/profile')
            } catch (error) {
                setError(error)
                
            }
        } catch (error) {
            alert(error)
            setError(error)
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Logo" />
                <form onSubmit={handlePasswordRecovery} >
                    <h1> Reset your password. </h1>
                    <input
                    name="passwordOne"
                    value={passwordOne}
                    onChange={e => {setPasswordOne(e.target.value)}}
                    type="password"
                    placeholder="Password"
                    />
                    <input
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={e => {setPasswordTwo(e.target.value)}}
                    type="password"
                    placeholder="Confirm Password"
                    />
                    <button
                        className="button"
                        disabled={isInvalid}
                        type="submit" > Send </button>
                    {error && <p>{error.message}</p>}
                </form>
                <Link className="back-link" to="/profile">
                       <FiArrowLeft size={16}  color="#e02041"/>
                       Back to Home
                </Link>
                
            </section>
            <img src={heroesImg} alt="Heroes" />

        </div>
    );
}

const PasswordChangePage = () => (
    <div>
        <FirebaseContext.Consumer>
            {firebase => <PasswordChangeFormBase firebase={firebase} />}
        </FirebaseContext.Consumer>
    </div>
);

export default PasswordChangePage;
