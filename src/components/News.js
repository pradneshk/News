import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
    
    
    constructor() {
        super();
        this.state = {
                articles:[],
                loading: false,
                page : 1,
                totalResults: ""
                
        }

    }

    async componentDidMount () {
        // let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=fcd3533582ed4992acd8be6c88696fe4"
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=1&pagesize=${this.props.pagesize}`
        this.setState({
            loading:true
    })
        this.props.setProgress(30);
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles:parsedData.articles, totalResults: parsedData.totalResults, loading:false});
        this.props.setProgress(100);
    }
    
    // handlePrev = async ()=>{
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fcd3533582ed4992acd8be6c88696fe4&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`;
    //     this.setState({
    //         loading:true
    // })
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     this.setState({
    //         page: this.state.page - 1,
    //         articles:parsedData.articles,
    //         loading:false
    //     });

    // }
    //Won'treusing this function for componentDidMount be usefull? Code kaam ho jayega...
    fetchMoreData= async () =>{
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
        this.setState({
            loading:true
    })
        this.props.setProgress(30);
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page + 1,
            articles:this.state.articles.concat(parsedData.articles),
            loading:false
        });
        this.props.setProgress(100);


    }

    date =()=> {
        let d = new Date();
        let newsDate;
        let currentDay = d.getDate();
        let currentMonth = d.getUTCMonth();
        let newCurrentMonth = currentMonth + 1;
        let currentYear = d.getFullYear();

        return newsDate = currentDay +"-"+ newCurrentMonth +"-"+ currentYear;

    }

    // handleNext = async ()=>{
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fcd3533582ed4992acd8be6c88696fe4&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
    //     this.setState({
    //         loading:true
    // })
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     this.setState({
    //         page: this.state.page + 1,
    //         articles:parsedData.articles,
    //         loading:false
    //     });

    // }

    render() {
        // let {API}=this.props;
        return (
            <>
                <h1  align="center" style={{marginTop: '90px', marginBottom:'30px'}}><strong><i>Breaking News..!! as on {this.date()}</i></strong></h1>
              {/* {this.state.loading && <Spinner/>} */}
              <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length != this.state.totalResults}
              loader={<Spinner/>}
              endMessage={
                <p style={{ textAlign: 'center' }}>
                  <b>That is it for Now! <br> Come back later for more news...</b>
                </p>
              }
              >
                  <div className="container mx-9 my-9">
               <div className="row">
                   {this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title} source={element.source.name} publishedAt={element.publishedAt} author={element.author} imgurl={element.urlToImage} description={element.description} url={element.url} />
                                </div>
                    })}
               
                   
                    
                </div></div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                <button type="button" disabled={this.state.page<=1} onClick={this.handlePrev} class="btn btn-dark">&#8592; Previous</button>
                <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pagesize)} onClick={this.handleNext} class="btn btn-dark">Next &#8594;</button>                    
                </div> */}
            </>
        )
    }
}

export default News
