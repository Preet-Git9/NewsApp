import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

 const App = ()=>{
    const pageSize = "9"
    const apiKey = process.env.REACT_APP_NEWS_API
    const[progress, setProgress] = useState(0) 
  
        return (
            <Router>
                  <LoadingBar height={3} color="red" progress={progress}  />
     
                    <Navbar />
                <Routes>
                    <Route exact path="/" element= {<News apiKey = {apiKey} setProgress= {setProgress} key="general" pageSize={pageSize} country="in" category="general"></News>}> </Route>
                    <Route exact path="/business" element= {<News apiKey = {apiKey} setProgress= {setProgress} key="business"   pageSize={pageSize} country="in" category="business"></News>}></Route>
                    <Route exact path="/technology" element= {<News apiKey = {apiKey} setProgress= {setProgress}  key="technology"  pageSize={pageSize} country="in" category="technology"></News>}></Route>
                    <Route exact path="/science" element= {<News apiKey = {apiKey} setProgress= {setProgress} key="science"   pageSize={pageSize} country="in" category="science"></News>}></Route>
                    <Route exact path="/sports" element= {<News apiKey = {apiKey} setProgress= {setProgress} key="sports"   pageSize={pageSize} country="in" category="sports"></News>}></Route>
                    <Route exact path="/entertainment" element= {<News apiKey = {apiKey} setProgress= {setProgress} key="entertainment"   pageSize={pageSize} country="in" category="entertainment"></News>}></Route>
                    <Route exact path="/health" element= {<News apiKey = {apiKey} setProgress= {setProgress} key="health"   pageSize={pageSize} country="in" category="health"></News>}></Route>
                </Routes>
            </Router>
        );
    }
    export default App

// ae
// ar
// at
// au
// be
// bg
// br
// ca
// ch
// br
// ca
// ch
// br
// ca
// ch
// br
// ca
// ch
// br
// ca
// ch
// br
// ca
// ch
// cn
// co
// cu
// cz
// de
// eg
// fr
// gb
// gr
// hk
// hu
// id
// ie
// il
// in
// it
// jp
// kr
// lt
// lv
// ma
// mx
// my
// ng
// nl
// no
// nz
// ph
// pl
// pt
// ro
// rs
// ru
// sa
// se
// sg
// si
// sk
// th
// tr
// tw
// ua
// us
// ve
// za