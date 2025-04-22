
import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function GitHub() {

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data);
    //             setData(data);
    //         })
    // }, []);

    const data = useLoaderData()

    return (

        <div>GitHub: {data.followers}
            <img src={data.avatar_url} />
        </div>
    );
}

export default GitHub;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}
