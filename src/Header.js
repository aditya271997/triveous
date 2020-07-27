import React,{ useEffect, useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import Newscard from './Newscard';
import axios from 'axios';

function Header() {
   const [data, setData] = React.useState(null);
   const getDataByCategory = async(type) => {
      const category = type	
	  var url = `https://newsapi.org/v2/top-headlines?q=${category}&apiKey=a95db4cd65934c78987c7e3db138675b`;
	  const result = await axios(url);
	  setData(result.data);
   }
   useEffect(async () => {
	var url = 'https://newsapi.org/v2/top-headlines?q=all&apiKey=a95db4cd65934c78987c7e3db138675b';
	const result = await axios(url);
	console.log(result);
	setData(result.data);
   }, []);
   return(
	<>   
    <header>
		<div className="top-head left">
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-lg-4">
						<h1>Triveous News<small>Get the latest News</small></h1>
					</div>
				</div>
			</div>
		</div>
	</header>
	<section className="top-nav">
			<nav className="navbar navbar-expand-lg py-0">
				<div className="container">
					<button className="navbar-toggler" type="button" data-toggle="collapse"
						data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="exCollapsingNavbar2">
						<ul className="nav navbar-nav ">
							<li className="nav-item active"> <a className="nav-link" href="#">Home <span
										className="sr-only">(current)</span></a> </li>
							<li className="nav-item" onClick={()=>getDataByCategory('world')}> <a className="nav-link" href="#">World</a> </li>
							<li className="nav-item" onClick={()=>getDataByCategory('politics')}> <a className="nav-link" href="#">Politics</a> </li>
							<li className="nav-item" onClick={()=>getDataByCategory('business')}> <a className="nav-link" href="#">Business</a> </li>
							<li className="nav-item" onClick={()=>getDataByCategory('science')}> <a className="nav-link" href="#">Science</a> </li>
							<li className="nav-item" onClick={()=>getDataByCategory('sports')}> <a className="nav-link" href="#">Sports</a> </li>
							<li className="nav-item" onClick={()=>getDataByCategory('technology')}> <a className="nav-link" href="#">Tech</a> </li>
							<li className="nav-item" onClick={()=>getDataByCategory('travel')}> <a className="nav-link" href="#">Travel</a> </li>
							<li className="nav-item" onClick={()=>getDataByCategory('health')}> <a className="nav-link" href="#">Health</a> </li>
						</ul>
						<form className="ml-auto">
							<div className="search">
								<input type="text" className="form-control" maxlength="64" placeholder="Search" />
								<button type="submit" className="btn btn-search"><i className="fa fa-search"></i></button>
							</div>
						</form>
					</div>
				</div>
			</nav>
		</section>
		<Newscard/>
		<section class="section-01"/>
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-md-12">
					<h3 class="heading-large"></h3>
					<hr/>
					 {data && data.totalResults>0 && data.articles.map(val=>
					   
						<div class="col-lg-6 card " style={{border:'none'}}>
							<div class="card"> 
                            <img class="img-fluid" src={val.urlToImage} alt=""/>
								<div class="card-body">
									<div class="news-title"><a href="#">
					                    <h2 class=" title-small">{val.title}</h2>
										</a></div>
									<p class="card-text">{val.description}</p>
									<p class="card-text"><small class="text-time"><em>{val.publishedAt}</em></small></p>
								</div>
							</div>
						</div>	
					)}					
				
				<aside class="col-lg-4 side-bar col-md-12">
					<ul class="nav nav-tabs" style={{flexWrap:'nowrap'}} role="tablist" id="myTab">
						<li class="nav-item"> <a class="nav-link active" data-toggle="tab" href="#home"
								role="tab">Latest</a> </li>
						<li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#profile" role="tab">Top</a>
						</li>
						<li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#messages"
								role="tab">Featured</a>
						</li>
					</ul>
                
					<div class="tab-content sidebar-tabing" id="nav-tabContent">
						<div class="tab-pane active" id="home" role="tabpanel">
							<div class="media"> <a href="#"> <img class="d-flex mr-3"
										src="https://i.guim.co.uk/img/media/73ec9db7723a38dba49ba7409c57da3a779b9531/690_23_3882_2329/master/3882.jpg?width=620&quality=85&auto=format&fit=max&s=372bc821a8d937e821981014036b2c8f"
										alt="Generic placeholder image"/></a>
								<div class="media-body">
									<div class="news-title">
								    <h2 class="title-small"><a href="#">Key Republicans sign letter warning against candidate</a></h2>
									</div>			
									<div class="news-auther"><span class="time">1h ago</span></div>
								</div>
							</div>
							<div class="media"> <a href="#"> <img class="d-flex mr-3"
										src="https://static01.nyt.com/images/2016/08/09/business/09UP-Medicaid/09UP-Medicaid-superJumbo.jpg?quality=90&auto=webp"
										alt="Generic placeholder image"/></a>
								<div class="media-body">
									<div class="news-title">
										<h2 class="title-small"><a href="#">Obamacare Appears to Be Making People
												Healthier</a></h2>
									</div>
									<div class="news-auther"><span class="time">1h ago</span></div>
								</div>
							</div>
							<div class="media"> <a href="#"><img class="d-flex mr-3"
										src="https://i.guim.co.uk/img/media/73ec9db7723a38dba49ba7409c57da3a779b9531/690_23_3882_2329/master/3882.jpg?width=620&quality=85&auto=format&fit=max&s=372bc821a8d937e821981014036b2c8f"
										alt="Generic placeholder image"/></a>
								<div class="media-body">
									<div class="news-title">
										<h2 class="title-small"><a href="#">Key Republicans sign letter warning against
												candidate</a></h2>
									</div>
									<div class="news-auther"><span class="time">1h ago</span></div>
								</div>
							</div>
	 
                        </div>
					</div>
                </aside>
			</div>
		</div>
        </div>
	</>	
   );
}
export default Header;