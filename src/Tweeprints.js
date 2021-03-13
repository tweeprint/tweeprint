import React, { useState, useEffect } from 'react';
import TweetEmbed from 'react-tweet-embed';

const Tweeprints = () => {
    const [tweeprints, setTweeprints] = useState([]);
    
    useEffect(() => {
        console.log('loading effect');
        fetch("http://localhost:8000/tweeprints/")
        .then(data => data.json())
        .then(data => setTweeprints(data))
    }, []);
    console.log('tweeprints:', tweeprints);
    

    return (
        <div>
        {tweeprints.map(tweeprint => 
            <div key={tweeprint.id}>
            <TweetEmbed id={tweeprint.link.split("/")[tweeprint.link.split("/").length - 1]} />
            </div>)}
        </div>
    )
}
export default Tweeprints;