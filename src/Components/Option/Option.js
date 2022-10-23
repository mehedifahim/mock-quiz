import React from 'react';
import './Option.css'
const Option = ({data}) => {
    console.log(data)
    return (
        <div className='grid-opt'>
        
            
            <input type="radio" name="option"/>
            <label htmlFor="option">{data}</label>
            
           
        

            
        </div>
    );
};

export default Option;