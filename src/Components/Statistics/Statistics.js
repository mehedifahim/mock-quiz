import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Line, LineChart, XAxis, YAxis} from 'recharts';
import './Statistics.css'
const Statistics = () => {
    const datas = useLoaderData();
    const {data} =datas;
    console.log(data)
    return (
        
        <div className='chart'>
            <h1>Statistics:</h1>
            <LineChart width={600} height={300} data={data}>
            <Line type="monotone" dataKey="total" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis/>
        </LineChart>
        </div>
    );
};

export default Statistics;