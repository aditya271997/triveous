import React,{ useEffect, useState } from 'react';
import axios from 'axios';

function Newscard(){
	const [data, setData] = React.useState(null);
	
	useEffect(async () => {
		var url = 'http://newsapi.org/v2/everything?' +'q=trending&' + 'apiKey=e4ece685b6934e9c93d42eff8638a302';
		const result = await axios(url);
		setData(result.data);
	  }, []);

return(
    <React.Fragment>
		<section className="banner-sec"/>
			<div className="container">
			<div className="row flex-row flex-sm-nowrap pt-3" style={{display:'flex',overflowX: 'auto'}}>
					{data && data.totalResults>0 && data.articles.map(val=>
						<div className="col-md-3">
						<div className="card"> 
							<img className="img-fluid"  src={val.urlToImage} alt=""/>
								<div className="card-img-overlay"> <span className="badge badge-pill badge-danger">News</span>
								</div>
								<div className="card-body">
									<div className="news-title">
									<h2 className=" title-small"><a href="#">{val.title}</a></h2>
									</div>
					              <p className="card-text"><small class="text-time"><em>{val.publishedAt}</em></small></p>
								</div>
							</div>
						</div>			 
					)}
				</div>
			</div>
    </React.Fragment>
	);
}

export default Newscard;