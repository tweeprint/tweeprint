import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const Submit = ({categories}) => {
    
    const [link, setLink] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    let history = useHistory();

    const data = {
            "link": link,
            "category": selectedCategory
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const submit = await fetch("http://localhost:8000/submit/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data),
        })
        submit.json()
        history.push("/tweeprints");
    };


    return(
    <div>
        <form class="space-y-8 divide-y divide-gray-200" method="POST" onSubmit={handleSubmit}>
        <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <div>
            <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                Submit a Tweeprint
                </h3>
                <p class="mt-1 max-w-2xl mx-auto text-sm text-gray-500">
                This information will be displayed publicly.
                </p>
            </div>

            <div class="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="username" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    Link to Twitter thread
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                    <div class="max-w-lg flex rounded-md shadow-sm">
                    <input required type="text" placeholder="twitter.com/coolpreprinturl" value={link} onChange={e => setLink(e.target.value)} className="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-md sm:text-sm border-gray-300" />
                    </div>
                </div>
                </div>

                <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="about" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    Category
                </label>
                <div>
                    <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                        <option value="" selected disabled hidden>Select a category</option>
                        {categories.map(category => <option value={category} key={category.id}>{category}</option>)}
                    </select>
                </div>
                </div>

                </div>
            </div>
            </div>

        <div class="pt-5">
            <div class="flex justify-center sm:justify-end">
            <button type="submit" value="Submit" class="ml-3 inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Submit
            </button>
            </div>
        </div>
        </form>
            </div>

    )
}

export default Submit;