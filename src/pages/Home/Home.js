import React from 'react';
import '../Home/Home.css'
import student from '../../assets/images/lake-7301021_1280.jpg'
import student2 from '../../assets/images/sunset-7708222_1280.jpg'
const Home = () => {
    return (
        <div>
      <div class="container">
 
  <div id="myCarousel" class="carousel slide" data-ride="carousel">

    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

   
    <div class="carousel-inner">
      <div class="item active">
        <img src={student} alt="Los Angeles" style={{width:"100%"}}/>
      </div>

      <div class="item">
        <img src={student} alt="Chicago" style={{width:"100%"}}/>
      </div>
    
      <div class="item">
        <img src={student} alt="New york"  style={{width:"100%"}}/>
      </div>
    </div>

 
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>
        </div>
    );
};

export default Home;