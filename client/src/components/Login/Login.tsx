import React from 'react'
import './Login.css'

const SPOTIFY_URL = "https://accounts.spotify.com/authorize?client_id=545bc37c391746368c3e07cef94bfd51&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
const Login = () => {
    return (
        <div className = "container">
            <div className = "row">
                <div className = "column">
                    <div className = "splashColumn" style={{backgroundImage: `url(${"https://images.unsplash.com/photo-1557511113-84fb922d34d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=916&q=80"})` , backgroundPosition:"center", backgroundSize: "auto 100%"}}>
                    </div>
                </div>
                <div className = "column">
                    <div className = "loginColumn">
                        <a className="auth" href={SPOTIFY_URL}>Login with spotify</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

