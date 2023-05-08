import React, { useState } from "react";
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth'
import * as Components from './Components';
import { auth } from '../firebase'
function Sign() {
    const [signIn, toggle] = React.useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            console.log(userCredential)
            window.location = '/'
        }).catch((error)=>{
            console.log(error);
            alert("User Not Found");
        })
    }

    const onSignUp = (e) =>{
            e.preventDefault();
            createUserWithEmailAndPassword(auth,email,password)
            .then((userCredential)=>{
                console.log(userCredential)
            }).catch((error)=>{
                console.log(error);
            })
    }
    return (
        <div className="sign">
            <Components.Container>
                <Components.SignUpContainer signinIn={signIn}>
                    <Components.Form>
                        <Components.Title>Create Account</Components.Title>
                        <Components.Input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                        <Components.Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Components.Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Components.Button onClick={onSignUp}>Sign Up</Components.Button>
                    </Components.Form>
                </Components.SignUpContainer>

                <Components.SignInContainer signinIn={signIn}>
                    <Components.Form >
                        <Components.Title>Sign in</Components.Title>
                        <Components.Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Components.Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                        <Components.Button onClick={onSignIn}>Sigin In</Components.Button>
                    </Components.Form>
                </Components.SignInContainer>

                <Components.OverlayContainer signinIn={signIn}>
                    <Components.Overlay signinIn={signIn}>

                        <Components.LeftOverlayPanel signinIn={signIn}>
                            <Components.Title>Welcome Back!</Components.Title>
                            <Components.Paragraph>
                                To keep connected with us please login with your personal info
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(true)}>
                                Sign In
                            </Components.GhostButton>
                        </Components.LeftOverlayPanel>

                        <Components.RightOverlayPanel signinIn={signIn}>
                            <Components.Title>Hello, Friend!</Components.Title>
                            <Components.Paragraph>
                                Enter Your personal details and start journey with us
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sigin Up
                            </Components.GhostButton>
                        </Components.RightOverlayPanel>

                    </Components.Overlay>
                </Components.OverlayContainer>

            </Components.Container>
        </div>
    )
}

export default Sign;