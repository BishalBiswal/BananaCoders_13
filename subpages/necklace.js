import React from 'react';
import './App.css';

function Necklace() {
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
                <img className="card-img-top" src="https://i.etsystatic.com/9371569/r/il/b1f47e/1621407106/il_fullxfull.1621407106_pgng.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Yellow Craft necklace</h5>
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
                <img className="card-img-top" src="https://5.imimg.com/data5/DX/MW/WQ/ANDROID-27244068/product-jpeg-500x500.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Red &amp; white stone necklace</h5>
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
                <img className="card-img-top" src="https://www.utsavpedia.com/wp-content/uploads/2013/10/1612-large.jpg" alt="Card image cap" />
                <div className="card-body"> 
                  <h5 className="card-title">Terracotta jewelry</h5>
                  <p className="card-text">399.00</p>
                  <a href="#" className="btn btn-primary">Add to cart</a>
                  <a href="#" className="btn btn-primary" style={{marginLeft: '50px', background: 'none', color: 'black'}}><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg></a>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src="https://cdn.shopify.com/s/files/1/0514/5090/4725/products/1_2dc7f3d0-c2b2-45b8-a8a5-a19b6e03bd89.png?v=1628950789" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Terracotta Clay Rakhi</h5>
                  <p className="card-text">₹79.00</p>
                  <a href="#" className="btn btn-primary">Add to cart</a>
                  <a href="#" className="btn btn-primary" style={{marginLeft: '50px', background: 'none', color: 'black'}}><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg></a>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src="https://2.bp.blogspot.com/-POFo7Zgronk/W2pJh-aJraI/AAAAAAAATBI/491SP9MBxNMD4ZOLyN9DSmo5asc5Z1n9ACLcBGAs/s1600/YouTubeCover.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Handmade Designer Rakhi</h5>
                  <p className="card-text">₹59.00</p>
                  <a href="#" className="btn btn-primary">Add to cart</a>
                  <a href="#" className="btn btn-primary" style={{marginLeft: '50px', background: 'none', color: 'black'}}><svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg></a>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src="
              https://5.imimg.com/data5/BX/FB/MY-45708108/beautiful-handmade-rakhi-500x500.jpeg
              " alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Normal Rakhi</h5>
                  <p className="card-text">₹49.00</p>
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

export default Necklace;