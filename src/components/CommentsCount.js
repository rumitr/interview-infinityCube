import { groupBy } from 'lodash';
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import BarChart from '../charts/BarChart';
const url = 'http://52.175.201.248:3000/facebook/facebook_comments/1'


const fetcher = (...args) => fetch(...args).then((res) => res.json()).then(res => res.list)



const CommentsCount = () => {
    const { data: result, error } = useSWR(url, fetcher);
    const [data, setData] = useState([])

    useEffect(() => {
        if (!error && result) {
            const DailyComments = groupBy(result, "post_id");
            let commentsCount = Object.values(DailyComments).map(comments => comments.length)
            setData(commentsCount)
        }
    }, [result]);


    if (error) return <h1>Something went wrong!</h1>
    if (!result) return <h1>Loading...</h1>
    return (
        <div className="Chart">
            <h2>Comments Count</h2>
            <button>Refresh</button>
            <BarChart width={600} height={400} data={data} />
        </div>
    );
}

export default CommentsCount
