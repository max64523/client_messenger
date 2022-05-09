import { useState, useContext } from "react"
import axios from 'axios';
import { Context } from "../../../Context";

function Registration(props) {
    const [login,setLogin] = useState('')
    const [password,setPassword] = useState('')
    const [userName,setUserName] = useState('')
    const {setIsAuth} = useContext(Context)
    
    const registration = async () => {
        try{
            await axios.post("http://localhost:5000/api/registration",
                {email:login,
                 password,
                 name:userName})
            .then(response => {
                setIsAuth(response.data.user.isActivated)
                localStorage.setItem('user',JSON.stringify(response.data))
            })
        } catch(e) {
            console.log(e);
        }
    }
    
    return ( 
    <div className="page register">
        <div className="register__description">
            <p>Make an account in some clicks with <span className="logo">logo</span></p>
        </div>
        <div className='form'>
            <label className="register__label">Name</label>
            <input 
                className='register__input'
                type="text" 
                onChange={(event) => {setUserName(event.target.value)} } 
                value={userName}
                placeholder='Username'
            />
            <label className="register__label">Login</label>
            <input 
                className='register__input'
                type="text" 
                onChange={(event) => {setLogin(event.target.value)} } 
                value={login}
                placeholder='Login'
            />
            <label className="register__label">Password</label>
            <input 
                className='register__input'
                type="text" 
                onChange={(event) => {setPassword(event.target.value)} } 
                value={password}
                placeholder='Password'
            />
            <button className='guest__button' onClick={registration}>Create account</button>
        </div>
    </div> );
}

export default Registration;