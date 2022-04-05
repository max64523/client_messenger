function Search() {
    const search = () => {
        
    }

    return ( 
    <div className="auth_page">
        <div className="search__form">
            <input type="text" className="search__form__input" />
            <button className="search__form__button" onClick={search}>search</button>
        </div>
        <div className="users_container">
            
        </div>
    </div> );
}

export default Search;