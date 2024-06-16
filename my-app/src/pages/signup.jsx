import React from 'react';

const SignupPage = () => {
    return (
        <div className='signup-page'>
            <label>Email Id</label>
            <input type="email" required placeholder='Enter your email here'/>
            <label>Password</label>
            <input type='password' required placeholder='Enter your password' />
        </div>
    )

}

export default SignupPage;