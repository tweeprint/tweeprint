import React, { useState, useEffect } from 'react';

const Tweeprints = ({tweeprints}) => {

    return (
        <div className="">
        {tweeprints.map(tweeprint => 
            <div className="my-16" key={tweeprint.pk} >
                <a href={`${tweeprint.fields.link}`}>

                <div className="flex flex-col sm:grid sm:grid-cols-4 items-center max-w-2xl">
                    <div className="flex flex-col">
                        <div className="flex flex-row justify-center">
                            <img className="w-16 h-16 rounded-full" src={tweeprint.fields.tweet_json.user.profile_image_url_https} alt=""/>
                        </div>
                        <div className="flex flex-col text-gray-400 mx-8 justify-center">
                            <p className="mx-2 text-sm">{tweeprint.fields.tweet_json.user.name}</p>
                            <p className="mx-2 text-sm">@{tweeprint.fields.tweet_json.user.screen_name}</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:col-span-3 justify-content text-gray-600 text-left mx-4">
                        <h2 className="text-center sm:text-left text-indigo-400 font-bold">{tweeprint.fields.category}</h2>
                        <h2 className="text-lg text-center sm:text-left my-4">{tweeprint.fields.tweet_json.full_text}</h2>
                        <div className="flex flex-row text-sm justify-center sm:justify-start text-gray-400">
                            <p className="mr-4">Likes: {tweeprint.fields.tweet_json.favorite_count}</p>
                            <p className="mr-4">Retweets: {tweeprint.fields.tweet_json.retweet_count}</p>
                        </div>
                    </div>
                </div>
                </a>
            </div>
            )}
        </div>
    )
}
export default Tweeprints;