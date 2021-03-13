import React, { useState, useEffect } from 'react';

const Tweeprints = () => {
    const [tweeprints, setTweeprints] = useState(null);
    
    useEffect(() => {
        fetch("http://localhost:8000/tweeprints/")
        .then(data => setTweeprints(data[0]))
        .then(data => console.log('threads:', data));
    });

    return (
        <div>
            {tweeprints}
        </div>
    )
}
export default Tweeprints;