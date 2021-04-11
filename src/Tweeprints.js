import React, { useState, useEffect } from 'react';
// import TweetEmbed from 'react-tweet-embed';

const Tweeprints = () => {
    const [tweeprints, setTweeprints] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/tweeprints/")
        .then(data => data.json())
        .then(data => setTweeprints(data))
    }, []);


    return (
        <div className="">
        {tweeprints.map(tweeprint => 
            <div className="my-16" key={tweeprint.pk} >
                <div className="flex flex-row justify-center items-center max-w-2xl">
                    <div className="flex flex-col">
                        <div className="flex flex-row justify-center">
                            <img className="w-16 h-16 rounded-full" src={tweeprint.fields.tweet_json.user.profile_image_url_https} alt=""/>
                        </div>
                        <div className="flex flex-col text-gray-400 mx-8 justify-center">
                            <p className="mx-2 text-sm">{tweeprint.fields.tweet_json.user.name}</p>
                            <p className="mx-2 text-sm">@{tweeprint.fields.tweet_json.user.screen_name}</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-content text-gray-600 text-left">
                        <h2 className="text-left text-indigo-400">{tweeprint.fields.category}</h2>
                        <h2 className="text-lg text-left my-4">{tweeprint.fields.tweet_json.full_text}</h2>
                        <div className="flex flex-row">
                            <p className="mx-4 text-sm">Likes: {tweeprint.fields.tweet_json.favorite_count}</p>
                            <p className="mx-4 text-sm">Retweets: {tweeprint.fields.tweet_json.retweet_count}</p>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}
export default Tweeprints;