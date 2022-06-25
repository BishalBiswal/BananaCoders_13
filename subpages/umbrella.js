import React from 'react';
import './App.css';

function Umbrella() {
 var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        {/* custom css */}
        <link rel="stylesheet" href="css/main.css" />
        {/* bootstrap css */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous" />
        {/* fontawsum */}
        <link rel="stylesheet" type="text/css" href="//use.fontawesome.com/releases/v5.7.2/css/all.css" />
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3kE6xn64jmrfX2dLXE9HiS3nXfbU9j7QQhg&usqp=CAU" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Red Chandua Umbrella</h5>
                  <p className="card-text">₹499.99</p>
                  <a href="#" className="btn btn-primary">Add to cart</a>
                  <a href="#" className="btn btn-primary" style={{marginLeft: '50px', background: 'none', color: 'black'}}><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg></a>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmBkKoslRxeREjXYKzuBi12EOQX3yWqWvjYQ&usqp=CAU" alt="Card image cap" />
                <div className="card-body">  
                  <h5 className="card-title">Blue Chandua Umbrella</h5>
                  <p className="card-text">₹599.00</p>
                  <a href="#" className="btn btn-primary">Add to cart</a>
                  <a href="#" className="btn btn-primary" style={{marginLeft: '50px', background: 'none', color: 'black'}}><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg></a>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3uLrwd6fszrqOIsUjx7UZsq4WgTs39pe3gg&usqp=CAU" alt="Card image cap" />
                <div className="card-body"> 
                  <h5 className="card-title">Banarasi Umbrella</h5>
                  <p className="card-text">459.00</p>
                  <a href="#" className="btn btn-primary">Add to cart</a>
                  <a href="#" className="btn btn-primary" style={{marginLeft: '50px', background: 'none', color: 'black'}}><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg></a>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src="https://tiimg.tistatic.com/fp/1/006/069/handcrafted-umbrella-192.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Classic Printed Umbrella</h5>
                  <p className="card-text">₹489.00</p>
                  <a href="#" className="btn btn-primary">Add to cart</a>
                  <a href="#" className="btn btn-primary" style={{marginLeft: '50px', background: 'none', color: 'black'}}><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* bottstrap js */}
      </div>
    );
  }
});
}

export default Umbrella;