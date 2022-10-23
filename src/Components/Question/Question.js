import React from 'react';
import Option from '../Option/Option';

import './Question.css'
const Question = ({data,index}) => {
    const {options} = data
    return (
        <div>
            <div className='que-option'>
                <div className='que'>
                    <h3>Quiz {index+1}: </h3>
                    <h3>{data.question}</h3>
                </div>

                <div>
                {
                    options.map(option => <Option data={option}></Option>)
                }
                </div>
                
            </div>
            
        </div>
    );
};

export default Question;