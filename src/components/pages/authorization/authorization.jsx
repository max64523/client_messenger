import {useState} from 'react';

function Auhtorization(props) {
    const [login,setLogin] = useState('')
    const [password,setPassword] = useState('')
    const authorization = ( ) => {
        props.setIsAuth(true);
    }

    return (
        <div className='guest__page'> 
            <div className='guest_form' >
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