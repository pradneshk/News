import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItem extends Component {
    static propTypes = {

    }

    render() {
        let {title, imgurl, description, url, author, publishedAt,source}=this.props;
        return (
  
            <div className="container my-3">
                
            <div className="card">
            <div style={{
                        display: 'flex',
                        right: "0",
                        position: 'absolute',
                        justifyContent: 'flex-end'
                        }} >
                    <span class="badge rounded-pill bg-danger" >
                        {source}</span>        
            </div>
                <img src={imgurl} className="card-img-top" alt="..."/>
                <div className="card-body">                    
                <h5 className="card-title">{title} </h5>     
                    <p className="card-text">{description}</p>  
                    <p className="card-author">By {!author?"unknown":author} and published on : {new Date(publishedAt).toUTCString()}</p>                                      
                    <a href={url} target="_blank" className="btn btn-dark">Read More...!!</a>
                </div>
            </div>
            </div>
            
        )
    }
}

export default NewsItem
