import React, { useState } from 'react';
import { CognitoUserPool, AuthenticationDetails, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';
import { popupPage } from './popup';
import '../styles/signupPage.css'

const LoginSignup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [toggleSignup , setToggleSignup] = useState(false);
    const userPool = new CognitoUserPool({
        UserPoolId: 'us-east-1_Y4A9YefdK',
        ClientId: 'p9a07jtfsegbuq1b7ibp2tq0l'
    });

    const handleAuthToggle = () => {
        setToggleSignup(!toggleSignup)
    }
    const handleLogin = async () => {
        const authenticationData = {
            Username: username,
            Password: password
        };

        const authenticationDetails = new AuthenticationDetails(authenticationData);
        const userData = {
            Username: username,
            Pool: userPool
        };

        const cognitoUser = new CognitoUser(userData);

        try {
            await new Promise((resolve, reject) => {
                cognitoUser.authenticateUser(authenticationDetails, {
                    onSuccess: (session) => resolve(session),
                    onFailure: (error) => reject(error)
                });
            });
            console.log('User logged in successfully');
        } catch (error) {
            console.error('Error logging in: ', error);
            popupPage(false);
        }
    };

    const handleSignup = async () => {
        const attributeList = [
            new CognitoUserAttribute({ Name: 'email', Value: email })
        ];

        try {
            await new Promise((resolve, reject) => {
                userPool.signUp(username, password, attributeList, null, (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                });
            });
            console.log('User signed up successfully');
        } catch (error) {
            console.error('Error signing up: ', error);
        }
    };
    
    return (
        <div className='mainContainer'>
            {!toggleSignup ? <div className='loginForm'>
                <h2>Login</h2>
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleLogin}>Login</button>
                <span onClick={handleAuthToggle}>Need to signup , signup here !!</span>
            </div> : <div className='signupForm'>
                <h2>Signup</h2>
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <button onClick={handleSignup}>Sign Up</button> 
                <span onClick={handleAuthToggle}>Need to Login , Login here !!</span>
            </div>}
        </div>
        
    );
};

export default LoginSignup;
