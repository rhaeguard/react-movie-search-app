import React from 'react';

export default class Pagination extends React.Component{

    constructor(props){
        super(props);
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
    }

    prev(){
        this.props.previous();
        return false;
    }

    next(){
        this.props.next();
        return false;
    }

    render(){
        if(this.props.value.length!==0){
            return (
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="featured-btn-wrap">
                            <ul className="pagination center-pagination">
                                <li className="page-item"><button onClick={this.prev} className="page-link" id="prev">Previous</button></li>
                                <li className="page-item"><button onClick={this.next} className="page-link" id="next">Next</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            );
        }
        return null;
    }
}