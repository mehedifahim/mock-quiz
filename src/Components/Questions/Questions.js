import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Questions = () => {
    const question = useLoaderData().data;
    const {questions,name} = question;
    console.log(questions)
    
    
    return (
        <div>
        <h2>Quiz of {name}</h2>
        
        {
            questions.map((data,idx) => <Question data={data} key={data.id} index={idx}></Question>)
        }
            
        </div>
    );
};

export default Questions;