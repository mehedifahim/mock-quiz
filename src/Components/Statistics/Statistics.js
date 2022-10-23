import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart} from 'recharts';

const Statistics = () => {
    const data = useLoaderData();
    const {total,name} =data;
    console.log(data)
    return (
        <div>
            <LineChart width={400} height={400} data={data}>
            <Line type="monotone" dataKey="total" stroke="#8884d8" />
            </LineChart>
        </div>
    );
};

export default Statistics;