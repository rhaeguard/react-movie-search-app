import React from 'react';
import Header from '../Header';
import Results from '../Results';
import Footer from '../Footer';

export default class App extends React.Component{
    
    constructor(props){
        super(props);
        this.imdbIDs = [];
        this.first = false;
        this.movies = [];
        this.old = "";
        this.prevPage = 1;
        this.totalPages = 0;
        this.state = {
          movies : [],
          search : "",
          page : 1
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
    }

    handleSearch(val){
      let prev = this.state.search;
      if(val.length>0){
          this.props = {
            keySearch : val
          };
        this.setState({search:val})
        this.old = prev;
        // pagination
        this.prevPage = 1;
        this.totalPages = 0;
        this.setState({page : 1});
      }
    }
  
    prev(){
      let p = this.state.page;
      if(p > 0){
        p--;
        this.prevPage = this.state.page;
        this.setState({page : p});
      }
    }

    next(){
      let p = this.state.page;
      if(p < this.totalPages){
        p++;
        this.prevPage = this.state.page;
        console.log(this.prevPage);
        this.setState({page : p});
      }
    }

    loadData = (keySearch, page) => {
      fetch(`https://www.omdbapi.com/?apikey=c435fe88&s=${keySearch}&page=${page}`)
      .then(response => response.json())
      .then(json=>{
        let movies = json.Search;
        let totalRes = json.totalResults;
        this.totalPages = Math.ceil(totalRes/10);
        this.movies = movies;
        this.imdbIDs = this.movies.map(e=>e.imdbID);
        this.findMov(this.imdbIDs);
      });
    };

    change = el => 'https://www.omdbapi.com/?apikey=c435fe88&i='+el;

    findMov = arr => {
      const promises = arr.map(el=>fetch(this.change(el)).then(e=>{
        return e.json();
      }));
      Promise.all(promises).then(movies => {
        this.elements = movies;
        this.movies = this.elements;
        this.setState({movies:this.elements}); // to update the state
      });
    }

    componentDidMount() {
      if(this.first){
        this.loadData(this.state.search);
      }else{
        this.first = false;
      }
    }
  
    componentDidUpdate() {
      if(this.old !== this.state.search || this.prevPage !== this.state.page){
        this.loadData(this.state.search, this.state.page);
        this.old = this.state.search;
      }
    }

    render(){
        return (
            <div>
                <Header handler={this.handleSearch} />
                <Results elements={this.movies} previous={this.prev} next={this.next}/>
                <Footer />
            </div>
        );
    }

}