import { useState } from 'react';
import { fetchUsers } from '../../../services/fetch-service';
import User from '../../Ucomponents/User';

function Search() {
    const [users,setUsers] = useState([])
    const [searchName, setSearchName] = useState('')
    const userId = JSON.parse(localStorage.getItem('user')).user.id

    const search = async (searchName) => {
        try {
            return await fetchUsers(searchName,userId)
        } catch (e) {
            console.log(e)
        }
    }

    const getUsers = async () => {
        setUsers((await search(searchName)).data);
    }

    return ( 
        <div className="page">
            <div className="form search__form">
                <label className='search__label'>Find friends with <span className='logo'>logo</span></label>
                <input 
                    type="text" 
                    className="search__form__input" 
                    value={searchName}  
                    onChange={(event) => setSearchName(event.target.value)}
                />
                <br/>
                <button 
                    className="search__form__button" 
                    onClick={getUsers}
                >
                    search
                </button>
            </div>
            <div className="users_container">
                <p>Search results:</p>
                { users.map(user =>  { return <User key={user.id} user={user}/> }) }
            </div>
        </div> 
    );
}

export default Search;