import React, { useState } from 'react'
import * as sessionActions from '../../store/session'
import { useDispatch } from 'react-redux'
// import { Redirect } from 'react-router-dom'
import { useModal } from '../../context/Modal.js'
import './LoginForm.css'

function LoginFormModal() {
    const dispatch = useDispatch()
    // const sessionUser = useSelector((state) => state.session.user)
    const [credential, setCredential] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})
    const { closeModal } = useModal()

    // if (sessionUser) return <Redirect to='/' />

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors({})
        return dispatch(sessionActions.login({ credential, password }))
        .then(closeModal)
        .catch(async (res) => {
            const data = await res.json()
            if(data && data.errors) {
                setErrors(data.errors)
            }
        })
    }

    return (
        <>
            <div id='login-form-div'>
                <h1 id='login-text'>Log In</h1>
                <form onSubmit={handleSubmit}>
                    <div id='credential-div'>
                        <input
                            id='login-credential-input'
                            type='text'
                            value={credential}
                            onChange={(e) => setCredential(e.target.value)}
                            required
                            placeholder='Username or Email'
                        />
                    </div>
                    <div id='password-div'>
                        <input
                            id='login-password-input'
                            type='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder='Password'
                        />
                    </div>
                    {errors.credential && <p id='errors-display'>{errors.credential}</p>}
                    <div id='button-div'>
                        <button id='login-submit-button' type='submit'>Log In</button>
                    </div>
                </form>
            </div>
        </>
    )
};

export default LoginFormModal;
