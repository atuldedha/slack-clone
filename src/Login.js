import React from 'react'
import './Login.css'
import {Button} from '@material-ui/core'
import {auth, provider} from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

const Login = () => {

    const [state, dispatch] = useStateValue();

    const signIn = () => {

        auth.signInWithPopup(provider).then(result => {
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        })
        .catch((error) => {
            alert(error.message);
        })

    }

    return (
        <div className = "login">
            <div className = "login_container">
                <img
                 src = "https://www.b2bnn.com/wp-content/uploads/2019/01/Screen-Shot-2019-01-17-at-2.29.34-PM.png"
                 alt = "" />

                <h1>Sign In to Slack-Clone</h1> 
                <p>slackclone.com</p>

                <Button onClick = {signIn}>Sign In With Google</Button>
            </div>

            
        </div>
    )
}

export default Login
