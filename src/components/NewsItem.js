import React from "react";

const NewsItem = (props)=>{
        let { title, discription, imageUrl, newsUrl, time, author, source } =
            props;
        return (
            <div style={{position: "relative",zIndex:"1"}}>
                <div className="card my-3">
                    <div style={{ display: "flex", 
                    position: "absolute",
                    right:"0",
                      }}>
                    <span
                            className="badge rounded-pill bg-danger"
                            
                        >
                            {source}
                        </span>
                        </div>
                        <img 
                            src={
                                !imageUrl
                                    ? "https://www.livemint.com/lm-img/img/2023/04/27/600x338/it-sector-kc6H--621x414LiveMint_1682599934196_1682599934395.jpg"
                                    : imageUrl
                            }
                            className="card-img-top"
                            alt="..."
                        />
                       
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{discription}</p>
                        <p className="card-text">
                            <small className="text-muted">
                                By {author} on {new Date(time).toGMTString()}{" "}
                            </small>
                        </p>
                        <a
                            href={newsUrl}
                            target="_blank"
                            className="btn btn-sm btn-primary"
                            rel="noreferrer"
                        >
                            Read more
                        </a>
                    </div>
                </div>
            </div>
        );
}

export default NewsItem