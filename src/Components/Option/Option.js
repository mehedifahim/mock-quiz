import React from 'react';
import './Option.css'
const Option = ({data,answerCheck}) => {
    console.log(data)
    return (
        <div className='grid-opt'>
        
            
            <input onClick={()=>answerCheck(data)} type="radio" name="option"/>
            <label htmlFor="option">{data}</label>
            
           
        

            
        </div>
    );
};

export default Option;