import React from 'react';
import Option from '../Option/Option';

import './Question.css'
const Question = ({data,index}) => {
    const {options, correctAnswer} = data
    return (
        <div>
            <div className='que-option'>
                <div className='que'>
                    <h3>Quiz {index+1}: </h3>
                    <h3>{data.question}</h3>
                </div>

                <div>
                {
                    options.map((option,idx) => <Option key ={idx} data={option} ></Option>)
                }
                </div>
                <p><small>Ans: { correctAnswer}</small></p>
            </div>
            
        </div>
    );
};

export default Question;