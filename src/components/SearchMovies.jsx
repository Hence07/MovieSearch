import  React  from 'react';


function SearchMovies (){
    const searchMovies = async (e) => {
        e.preventDefault();
        console.log("Submitting")
        const query = "Django";

        const url = `https://api.themoviedb.org/3/movie/550?api_key=9a621bceb7d36f9a48b31e81bcfe6ddb
&language=en-US&query=${query}&page=1&include_adult=false`;

       try{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
       }catch(err){
            console.log(err)
       }
    }
    return(
        
            <form className="form" onSubmit={searchMovies}>
                    <label className="label" htmlFor="query">Movie Name</label>
                    <input className="input" type="text" name="query" placeholder="i.e. Django"/>
            <button className="button" type="submit">Search</button>
            </form>
    )
}

export default SearchMovies;