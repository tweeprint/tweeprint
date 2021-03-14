import React, { useState, useEffect } from 'react';
import TweetEmbed from 'react-tweet-embed';

const Tweeprints = () => {
    const [tweeprints, setTweeprints] = useState([]);

    useEffect(() => {
        fetch("https://api.tweeprint.com/tweeprints/")
        .then(data => data.json())
        .then(data => setTweeprints(data))
    }, []);
    

    return (
        <div className="">
        {tweeprints.map(tweeprint => 
            <div className="" key={tweeprint.id} >
            <div className="flex flex-col justify-content">
            <h2 className="align-center text-gray-400">{tweeprint.category}</h2>
            <TweetEmbed className="mt-2 mb-16" 
                        options={{align: 'center'}} 
                        id={tweeprint.tweet_id} 
                        dnt="true"
                        />
            </div>
            </div>
            )}
        </div>
    )
}
export default Tweeprints;