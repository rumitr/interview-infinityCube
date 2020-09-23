import { groupBy } from 'lodash';
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import BarChart from '../charts/BarChart';
import PieChart from '../charts/PieChart';
import { fetcher } from "../utils"
const url = 'http://52.175.201.248:3000/facebook/facebook_post/1'







const Likes = () => {
    const { data: result, error } = useSWR(url, fetcher);
    console.log(result)
    const [data, setData] = useState([])

    useEffect(() => {
        if (!error && result) {
            console.log(result.filter(post => post.post.likes))
        }
    }, [result]);


    if (error) return <h1>Something went wrong!</h1>
    if (!result) return <h1>Loading...</h1>
    return (
        <div className="Chart">
            <h2>Comments Count</h2>
            <button>Refresh</button>
            <PieChart />
        </div>
    );
}

export default Likes
