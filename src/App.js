import './App.css';
import Opener from './Opener.js';
import Footer from './Footer.js';
import Submit from './Submit.js';
import About from './About.js';
import Tweeprints from './Tweeprints.js';
import {BrowserRouter as Router,Switch,Route, Link, useRouteMatch, useParams} from "react-router-dom";
import React, { useState, useEffect } from 'react';

function App() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("https://api.tweeprint.com/categories/")
        .then(data => data.json())
        .then((data) => setCategories(data.map(category => category.name)))
    }, []);
    console.log('categories:', categories);

  return (
    <Router>
    <div className="App flex items-center justify-center mt-64 h-full ">
        <div className="max-w-full mx-auto sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold mb-2 leading-7 text-gray-900 sm:text-3xl sm:truncate">
              <Link className="text-indigo-600" to="/">
                Tweeprint
              </Link>
            </h1>
            <h2 className="text-md font-bold mb-6 text-gray-400 sm:text-md sm:truncate">
              Find and share cool twitter threads about preprints.
            </h2>
            <Switch>
              <Route exact path="/">
                <Opener />
                <Footer />
              </Route>
              <Route exact path="/submit">
                <Submit categories={categories}/>
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/tweeprints">
                <Tweeprints/>
              </Route>
            </Switch>
        </div>
    </div>
   </Router> 
  );
}

export default App;
