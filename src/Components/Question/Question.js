import React from 'react';
import Option from '../Option/Option';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Question.css'
const Question = ({data,index}) => {
    const {options, correctAnswer} = data;
    const showAns = () =>{
        
        toast(correctAnswer)
        
    }

    const answerCheck= (ans) =>{
        if (ans === correctAnswer){
            toast('correct')
        }
        else{
            toast('wrong')
        }
    }
    return (
        <div>
            <div className='que-option'>
            <button onClick={showAns}>
            <FontAwesomeIcon icon={faEye}/>
            <ToastContainer />
            </button>
                <div className='que'>
                    <h3>Quiz {index+1}: </h3>
                    <h3>{data.question}</h3>
                </div>

                <div>
                {
                    options.map((option,idx) => <Option key ={idx} data={option} answerCheck={answerCheck}></Option>)
                }
                </div>
                
            </div>
            
        </div>
    );
};

export default Question;