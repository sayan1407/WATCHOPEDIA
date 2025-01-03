const MovieList = (props) => {
    
     return(
        <div className="text-white">
            {props.movieList.map((m,index) => (
            <div key={index}>- {m}</div>
        ))}

        </div>
        
     )
}

export default MovieList;