import {useState, useContext} from 'react';
import { Context } from '../../../Context';
import axios from 'axios';


function Auhtorization(props) {
    const [login,setLogin] = useState('')
    const [password,setPassword] = useState('')
    const {setIsAuth} = useContext(Context)

    const authorization = async ( ) => {
        try{
            await axios.post("http://localhost:5000/api/login",
                {email:login,
                 password:password}
                )
            .then(response => {
                setIsAuth(response.data.user.isActivated)
                localStorage.setItem('user',JSON.stringify(response.data))
            })
        } catch(e)
        {
            console.log(e);
        }
    }


    return (
        <div className='page'> 
            <div className='form' >
                <input 
                    className='auth__input'
                    type="text" 
                    onChange={(event) => {setLogin(event.target.value)} } 
                    value={login}
                    placeholder='Login'
                />
                <input 
                    className='auth__input'
                    type="text" 
                    onChange={(event) => {setPassword(event.target.value)} } 
                    value={password}
                    placeholder='Password'
                />
                <button className='guest__button' onClick={authorization}>Sign in</button>
            </div>
            <div className='auth__content'>
                <p className='auth__content__app-name'>logo</p>
                <p className='auth__content__description'>Be always in touch with logo </p>
            </div>
        </div>);
}

export default Auhtorization;