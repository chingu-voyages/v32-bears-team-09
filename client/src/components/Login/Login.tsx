import React from 'react'
import './Login.css'

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
                        <button className="auth">Login with spotify</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

