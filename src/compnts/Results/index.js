import React from 'react';
import Element from '../Element';
import Pagination from '../Pagination';

export default class Results extends React.Component{

    constructor(props){
        super(props);
        this.results = this.results.bind(this);
    }

    results(){
        console.log(this.props.elements.length)
        if(this.props.elements.length!==0){
            return (
                this.props.elements.map(el=><Element key={el.Title} movie={el} />)
            );
        }else{
            return null;
        }
    }

    render(){
        return (
            <section className="main-block light-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-5">
                            <div className="styled-heading">
                                <h3>Search Results</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {this.results()}
                    </div>
                    <Pagination value={this.props.elements} previous={this.props.previous} next={this.props.next} />
                </div>
            </section>
        );
    }

}