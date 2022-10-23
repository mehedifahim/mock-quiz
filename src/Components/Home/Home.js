import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';
import './Home.css'

const Home = () => {
    const home = useLoaderData();
    const {data} = home
// const [Topics,setTopics] = useState({});
//     useEffect(()=>{
//         axios.get('https://openapi.programming-hero.com/api/quiz')
//         .then(res => setTopics(res.data))
//         }
//         ,[])
    // console.log(data)
    
    return (
        <div >
            <h2>Practice mock quizzes of useful frontend components</h2>
            <div className='page'>
                <div className='card-grid'>
                
                {
                    data.map(dt => <Card data = {dt} key ={dt.id} ></Card>)
                    
                }
                </div>
            </div>
            
        
            
            
        </div>
    );
};

export default Home;