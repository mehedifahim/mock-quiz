import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css'

const Card = ({data}) => {
    // console.log(data)
    return (
        <div>
            <div className="card">
                <img src={data.logo} alt="" />
                <h3>{data.name}</h3>
                <p><small>Total Questions:{data.total}</small></p>

                <Link to={`/${data.id}`}>Start Practice       
                </Link>
            </div>
            
            
        </div>
    );
};

export default Card;