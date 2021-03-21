import './App.css';
import Opener from './Opener.js';
import Footer from './Footer.js';
import Submit from './Submit.js';
import About from './About.js';
import Tweeprints from './Tweeprints.js';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Categories from './Categories';

const App = () => {
  
    const [tweeprints, setTweeprints] = useState([]);
    const [usedCategories, setUsedCategories] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      const getData = async () => {
        const data = await fetch("http://localhost:8000/");
        setTweeprints(await data.json())
        const cats = await fetch("http://localhost:8000/categories/");
        setCategories(await cats.json())
        const usedCats = await fetch("http://localhost:8000/used_categories/");
        setUsedCategories(await usedCats.json())
      };
      getData();
    }, []);

  return (
    <Router>
    <div className="App flex items-center justify-center mt-16 h-full ">
        <div className="max-w-full mx-auto sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold mb-2 leading-7 text-gray-900 sm:text-3xl sm:truncate">
              <Link className="text-indigo-600" to="/">
                Tweeprint
              </Link>
            </h1>
            <h2 className="text-md font-bold mb-6 text-gray-400 sm:text-md sm:truncate">
              Find and share cool Twitter threads about preprints.
            </h2>
            <Categories categories={usedCategories} />
            <Switch>
              <Route exact path="/">
                <Opener />
                <Footer />
              </Route>
              <Route path="/submit">
                <Submit categories={categories} />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route exact path="/tweeprints">
                <Tweeprints tweeprints={tweeprints} />
              </Route>
            </Switch>
        </div>
    </div>
   </Router> 
  );
}

export default App;
