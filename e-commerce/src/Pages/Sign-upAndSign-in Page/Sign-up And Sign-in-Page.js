import React from 'react';
import SignIn from '../../Components/SignIn/SignIn';
import SignUp from '../../Components/SignUp/SignUp';

import './Sign-upAndSign-in-Page.style.scss';


const SignupAndSigninPage=() =>{
    return(
        <div>
            <SignIn/>
            <SignUp/>
        </div>
    )
}
export default SignupAndSigninPage;