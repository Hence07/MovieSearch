import  React  from 'react';


function SearchMovies (){
    return(
        
            <form className="form">
                    <label className="label" htmlFor="query">Movies Name</label>
                    <input className="input" type="text" name="query" placeholder="i.e. Django"/>
            <button className="button" type="submit">Search</button>
            </form>
    )
}

export default SearchMovies;