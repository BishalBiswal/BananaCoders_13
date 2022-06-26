import React from 'react';
import './App.css';
import { data } from './data.js'
import Card from './card.js'
import Shop from './shop';
import Bot from './Bot';
import { FaCartPlus, FaHeadset, FaHome, FaListUl, FaPenNib, FaPhoneAlt, FaUserAlt } from 'react-icons/fa';
function Home() {
    return (
        <>
            <Bot />
            <div className='all'>
                <section className='head'>
                    <button className="btn btn-danger" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas"> <FaListUl />&nbsp;&nbsp;Menu</button>
                    <h2 className='hed'>KraftLoom</h2>
                    <div id='user-account'><button className='btn btn-danger'>wishlist</button>
                        <button className='btn btn-danger'><FaUserAlt /></button></div>
                </section>

                <section  >
                    <div>
                        <div className='offcanvas offcanvas-start' tabIndex="-1" id="offcanvas" aria-labelledby="offcanvaslabel">
                            <div className='offcanvas-header'>
                                <h2 className='offcanvas-title'>Menu</h2>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>

                            <div className='offcanvas-body'>
                                <button className='btn btn-outline-warning'><FaHome />&nbsp;&nbsp;Home</button>
                                <a className='btn btn-outline-warning' href="/shop"><FaCartPlus />&nbsp;&nbsp;Shop</a>
                                <div id="login1"><button className='btn btn-danger'><FaHome />&nbsp;&nbsp;login</button>
                                    <button className='btn btn-danger'><FaHome />&nbsp;&nbsp;signup</button></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='mid'>
                    <div className='story'><p>Meet <br />the Artisans Behind</p></div>
                    <div id="canva" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#d1" data-bs-slide-to="1" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#d2" data-bs-slide-to="2" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#d3" data-bs-slide-to="3" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" id="d1" data-bs-interval="3000">
                                <img src="./" className="d-block w-100" alt="" />
                                <div className="carousel-caption d-md-block block1">
                                    <h4>Lorem technologies</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut neque dignissimos voluptatibus, ipsam tenetur quidem quae alias deserunt quas.</p>
                                </div>
                            </div>
                            <div className="carousel-item" id="d2" data-bs-interval="2000">
                                <img src="./" className="d-block w-100" alt="" />
                                <div className="carousel-caption d-md-block block2" >
                                    <h4>Lorem technologies</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut neque dignissimos voluptatibus, ipsam tenetur quidem quae alias deserunt quas.</p>
                                </div>
                            </div>
                            <div className="carousel-item" id="d3" data-bs-interval="2000">
                                <img src="./" className="d-block w-100" alt="" />
                                <div className="carousel-caption d-md-block block3">
                                    <h4>Lorem technologies</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut neque dignissimos voluptatibus, ipsam tenetur quidem quae alias deserunt quas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <article className='discount'>
                    <h2>Get 15% off on first order</h2>
                </article>

                <section className='middle'>
                    <div className='cardd'>
                        {data.map((card) => {
                            return (
                                <Card key={card.id} {...card}></Card>
                            );
                        })}
                    </div>
                </section>
            </div>
        </>
    );
}
export default Home;