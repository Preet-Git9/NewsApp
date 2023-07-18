import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=>{
    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [totalResults, setTotalResults] = useState(0)
    const capitalizeFLater = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    // document.title = `${this.capitalizeFLater(
    //     this.props.category
    // )} - News App`;


    const updateNews = async()=>{
        props.setProgress("0")
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
        setLoading(true)
        props.setProgress("30")

        let data = await fetch(url);
        let parsedData = await data.json();
        props.setProgress("65")
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress("100")

    }
    useEffect(()=>{
        updateNews();
    },[])
   
    const fetchMoreData = async()=> {
        setTimeout(async() => {
            setPage(page+1)
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
          
            let data = await fetch(url);
            let parsedData = await data.json();
            setArticles(articles.concat(parsedData.articles))
            setTotalResults(parsedData.totalResults)
            setLoading(false)
         
        }, 1500);
    }
        return (
            <>
                <h1 className="text-center">
                    News - Top {capitalizeFLater(props.category)}{" "}
                    Headlines
                </h1>
                {/* search the country by props */}
                {/* <nav className="navbar navbar-light bg-light my-2">
                    <form className="form-inline">
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Enter the country to search"
                            aria-label="Search"
                            id="input"
                        />
                        <button
                            className="btn btn-outline-success my-2 my-sm-0"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </nav> */}
                <InfiniteScroll
                    dataLength={articles.length} //This is important field to render the next data
                    next={fetchMoreData}
                    // hasMore={
                    //     this.state.articles.length !== this.state.totalResults
                    // }
                    hasMore = {articles.length < totalResults && page < Math.ceil(totalResults / props.pageSize)}
                    loader={<Spinner/>}
                    style={{ overflowY: 'hidden' }}
                >
                        <div className="container" style={{position: "relative",zIndex:"-1"}}>
                        <div className="row">
                            {articles.map((element, index) => {
                                return <div className="col-md-4" key={index}>
                                        <NewsItem
                                            title={
                                                element.title
                                                    ? element.title
                                                    : ""
                                            }
                                            discription={
                                                element.description
                                                    ? element.description
                                                    : ""
                                            }
                                            newsUrl={element.url}
                                            imageUrl={element.urlToImage}
                                            time={element.publishedAt}
                                            author={element.author}
                                            source={element.source.name}
                                        />
                                    </div>
                               
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        );
    
}
News.defaultProps = {
    country: "in",
    category: "general",
    pageSize: 5,
};
News.propType = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
};

export default News;
