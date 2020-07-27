import React,{ Fragment,useEffect, useState, useRef } from 'react';
import axios from 'axios';

function Content(props) {
    return(
        <Fragment>
        <section class="section-01"/>
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-md-12">
					<h3 class="heading-large">Politics</h3>
					
						<div class="col-lg-6 card">
							<div class="card"> 
                            <img class="img-fluid" src="https://static01.nyt.com/images/2016/08/06/us/00pain-web1/00pain-web1-superJumbo.jpg?quality=90&auto=webp" alt=""/>
								<div class="card-body">
									<div class="news-title"><a href="#">
											<h2 class=" title-small">Minorities Suffer From Unequal Pain Treatment</h2>
										</a></div>
									<p class="card-text">Some quick example text to build on the card title and make up
										the
										bulk of the card's content.</p>
									<p class="card-text"><small class="text-time"><em>3 mins ago</em></small></p>
								</div>
							</div>
						</div>
                        
                        
						<div class="col-lg-6 card">
							<div class="card"> <img class="img-fluid"
									src="https://static01.nyt.com/images/2016/08/06/us/00pain-web1/00pain-web1-superJumbo.jpg?quality=90&auto=webp" alt=""/>
								<div class="card-body">
									<div class="news-title"><a href="#">
											<h2 class=" title-small">Minorities Suffer From Unequal Pain Treatment</h2>
										</a></div>
									<p class="card-text">Some quick example text to build on the card title and make up
										the
										bulk of the card's content.</p>
									<p class="card-text"><small class="text-time"><em>3 mins ago</em></small></p>
								</div>
							</div>
						</div>
						<div class="col-lg-6 card">
							<div class="card"> <img class="img-fluid"
									src="https://static01.nyt.com/images/2016/08/06/us/00pain-web1/00pain-web1-superJumbo.jpg?quality=90&auto=webp" alt=""/>
								<div class="card-body">
									<div class="news-title"><a href="#">
											<h2 class=" title-small">Minorities Suffer From Unequal Pain Treatment</h2>
										</a></div>
									<p class="card-text">Some quick example text to build on the card title and make up
										the
										bulk of the card's content.</p>
									<p class="card-text"><small class="text-time"><em>3 mins ago</em></small></p>
								</div>
							</div>
						</div>
						<div class="col-lg-6 card">
							<div class="card"> 
                            <img class="img-fluid" src="https://static01.nyt.com/images/2016/08/06/us/00pain-web1/00pain-web1-superJumbo.jpg?quality=90&auto=webp" alt=""/>
								<div class="card-body">
									<div class="news-title"><a href="#">
									<h2 class=" title-small">Minorities Suffer From Unequal Pain Treatment</h2> </a>
                                    </div>
										
									<p class="card-text">Some quick example text to build on the card title and make up
										the
										bulk of the card's content.</p>
									<p class="card-text"><small class="text-time"><em>3 mins ago</em></small></p>
								</div>
							</div>
						</div>
					
				
				<aside class="col-lg-4 side-bar col-md-12">
					<ul class="nav nav-tabs" role="tablist" id="myTab">
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
        </Fragment>

    );
}

export default Content;