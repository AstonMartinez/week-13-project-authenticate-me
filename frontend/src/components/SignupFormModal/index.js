import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useModal } from '../../context/Modal.js'
import * as sessionActions from '../../store/session'
import './SignupForm.css'

function SignupFormModal() {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState({})
    const [image, setImage] = useState(null)

    const { closeModal } = useModal()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(password === confirmPassword) {
            setErrors({})
            return dispatch(
                sessionActions.signup({
                    email,
                    username,
                    firstName,
                    lastName,
                    password,
                    image
                })
            )
            .then(closeModal)
            .catch(async (res) => {
                const data = await res.json()
                if (data && data.errors) {
                    setErrors(data.errors)
                }
            })
        }
        return setErrors({
            confirmPassword: "Confirm Password field must be the same as the Password field"
        })
    }

    const updateFile = (e) => {
        const file = e.target.files[0]
        if(file) setImage(file)
    }

    return (
        <>
        <div id='signup-form-div'>
            <h1 id='signup-text'>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div id='email-div'>
                    <input
                        id='email-input-field'
                        type='text'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder='Email'
                    />
                </div>
                    <div>
                        {errors.email && <p id='email-errors-display'>{errors.email}</p>}
                    </div>
                <div id='username-div'>
                    <input
                        id='username-input-field'
                        type='text'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        placeholder='Username'
                    />
                </div>
                <div>
                    {errors.username && <p id='username-errors-display'>{errors.username}</p>}
                </div>
                <div id='firstName-div'>
                    <input
                        id='firstName-input-field'
                        type='text'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        placeholder='First Name'
                    />
                </div>
                <div>
                    {errors.firstName && <p id='firstName-errors-display'>{errors.firstName}</p>}
                </div>
                <div id='lastName-div'>
                    <input
                        id='lastName-input-field'
                        type='text'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder='Last Name'
                        required
                    />
                </div>
                <div>
                    {errors.lastName && <p id='lastName-errors-display'>{errors.lastName}</p>}
                </div>
                <div id='password-div'>
                    <input
                        id='password-input-field'
                        type='text'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder='Password'
                    />
                </div>
                <div>
                    {errors.password && <p id='password-errors-display'>{errors.password}</p>}
                </div>
                <div id='confirmPassword-div'>
                    <input
                        id='confirmPassword-input-field'
                        type='text'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        placeholder='Confirm Password'
                    />
                </div>
                <div>
                    {errors.confirmPassword && <p id='confirmPassword-errors-display'>{errors.confirmPassword}</p>}
                </div>
                <div>
                    <label>Avatar</label>
                    <input type='file' onChange={updateFile} />
                </div>
                <div id='signup-button-div'>
                    <button id='signup-submit-button' type='submit' onClick={handleSubmit} disabled={(email.length > 0 && username.length >= 4 && firstName.length > 0 && lastName.length > 0 && password.length >= 6) ? false : true}>Sign Up</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default SignupFormModal;
