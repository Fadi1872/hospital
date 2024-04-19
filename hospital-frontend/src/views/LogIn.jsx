import React from 'react'
import LogInForm from '../components/LogInForm/LogInForm'
import FormAnimation from '../components/FormAnimation/FormAnimation'
import AuthService from '../Services/AuthService'

function LogIn() {
    if (AuthService.is_loggedIn()) {
        console.log('ur logged in');
    }
    return (
        <>
            <div className='d-flex h-100 justify-content-center align-items-center'>
                <LogInForm />
                <FormAnimation />
            </div>
        </>
    )
}

export default LogIn