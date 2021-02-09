import React from 'react';
import SignIn from '../../componets/signIn/signIn.component';
import SignUp from '../../componets/signUp/signUp.component';

import './signInAndSignup.styles.scss';


const SignInAndSignUp = () =>(
    <div className="sign-in-and-sign-up">
        <SignIn/>
        <SignUp/>
    </div>
)

export default SignInAndSignUp;