import React from 'react';

export default class Element extends React.Component{
    
    constructor(props){
        super(props);
        this.renderImage = this.renderImage.bind(this);
    }

    renderImage(){
        if(this.props.movie.Poster.includes('http')){
            return (<img src={this.props.movie.Poster} className="img-fluid" alt="#" />);
        }
        return null;
    }
    
    render(){
        return (
            <div className="col-md-4 featured-responsive">
                <div className="featured-place-wrap">
                    <a href="">
                        {this.renderImage()}
                        <span className="featured-rating-orange">{this.props.movie.imdbRating}</span>
                        <div className="featured-title-box">
                            <h6>{this.props.movie.Title}</h6>
                            <p>{this.props.movie.Year} </p> <span>• </span>
                            <p>{this.props.movie.Genre}</p> <span> • </span>
                            <p><span>{this.props.movie.Runtime}</span></p>
                            <ul>
                                <li>
                                    <p>Actors : <span>{this.props.movie.Actors}</span></p>
                                </li>
                                <li>
                                    <p>Director : <span>{this.props.movie.Director}</span></p>
                                </li>
                                <li>
                                    <p>Country : <span>{this.props.movie.Country}</span></p>
                                </li>

                            </ul>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}