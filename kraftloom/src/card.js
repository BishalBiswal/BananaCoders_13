import React from 'react'
const Card = (props) => {
    const { img, title, body } = props;

    return (
        <div className="card">
            <img src={img} alt="" className='card-img-top' />
            <div className='card-body'>
                <h3>{title}</h3>
                <p className='card-text'>{body}</p>
            </div>

        </div>
    );
};

export default Card;