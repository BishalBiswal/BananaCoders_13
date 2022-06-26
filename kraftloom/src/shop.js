import React from 'react'
import './App.css';
import { Outlet, Link } from 'react-router-dom';

function Shop() {
    return (
        <>
            <div className='cardholder'>
                <div>
                    <div className="card" >
                        <img className="card-img-top" id="i1" src="./kurti.jpg" alt="" />
                        <div className="card-body">
                            <a href="/kurti" className="btn btn-primary">Kurti</a>
                            <h5 className="card-title">kurti</h5>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card" >
                        <img className="card-img-top" id="i2" src="./sareecarousel.jpg" alt="" />
                        <div className="card-body">
                            <a href="/saree" className="btn btn-primary">saree</a>
                            <h5 className="card-title">Sarees</h5>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card" >
                        <img className="card-img-top" id="i3" src="./sareecarousel.jpg" alt="" />
                        <div className="card-body">
                            <a href="/bag" className="btn btn-primary">Bag</a>
                            <h5 className="card-title">Bag</h5>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card" >
                        <img className="card-img-top" id="i4" src="./sareecarousel.jpg" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Necklace</h5>
                            <a href="/necklace" className="btn btn-primary">Necklace</a>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card" >
                        <img className="card-img-top" id="i5" src="./sareecarousel.jpg" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">rugsandcarpet</h5>
                            <a href="/rugsandcarpet" className="btn btn-primary">rugsandcarpet</a>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}
export default Shop;
