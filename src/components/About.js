import React from 'react'
export default function About(props) {
  return (
    <>
 <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel"  data-interval="2000">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="./edgerunner.png" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="./messi.jpg" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="./og_ghoul.jpg" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</>
  )
}
