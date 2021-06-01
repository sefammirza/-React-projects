import React from 'react';

const MovieList =(props) =>{
        
    /*function handleClick(event){
        console.log(event.pageY)
    }*/
    
    return (
            <div className="row">


                {props.movies.map((movies) => (
    
                    <div className="col-lg-4" key={movies.id}>
                        <div className="card mb-4 shadow-sm">
                            <img src={movies.imageURL} className="card-img-top" alt="Sample Movie" />
                            <div className="card-body">
                                <h5 className="card-title">{movies.name}</h5>
                                <p className="card-text">{movies.overviev}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <button type="button" onClick={(event) => props.deleteMovieProp(movies)} className="btn btn-md btn-outline-danger">Delete</button>
                                    <h2><span className="badgebadge-info">{movies.rating}</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}



            </div>
        )
}

export default MovieList;