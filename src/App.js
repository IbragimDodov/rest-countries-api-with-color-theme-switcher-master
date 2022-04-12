import React, {useEffect, useState} from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import './App.css';
import Header from "./components/Header";
import AboutRegion from "./components/AboutRegion";
import Main from "./components/Main";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v2/all')
      .then(({data}) => {
        setCountries(data);
      });
  }, [])

  return (
    <div className="App">
      <div className="container">
        <Router>
          <Header/>
          <Routes>
            <Route exact path="/" element={<Main countries={countries} />}/>
            <Route path="/countries/:name" element={<AboutRegion countries={countries}/>}/>
            {/* <Route path={`/countries/${countries.name}`} element={<AboutRegion countries={countries}/>}/> */}
          </Routes>
        </Router>
        
      </div>
    </div>
  );
}

export default App;
