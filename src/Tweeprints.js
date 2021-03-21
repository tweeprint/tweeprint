import React from 'react';
import TweetEmbed from 'react-tweet-embed';

const Tweeprints = ({tweeprints}) => {

    return (
        <div className="">
            {tweeprints.map(tweeprint => 
                <div className="" key={tweeprint.pk} >
                    <div className="flex flex-col justify-content">
                        <h2 className="align-center text-gray-400">{tweeprint.fields.category}</h2>
                        <TweetEmbed className="mt-2 mb-16" 
                                options={{align: 'center'}} 
                                id={tweeprint.fields.tweet_id} 
                                dnt="true"
                                />
                    </div>
                </div>
            )}
        </div>
    )
}
export default Tweeprints;