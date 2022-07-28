import React from 'react';
import {Routes, Route} from "react-router-dom";
import HomePage from "../Pages/Home";
import SomethingPage from "../Pages/Something";
import AboutPage from "../Pages/About";
import Layout from "../Layout/Layout";



const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' elemet={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path='something' element={<SomethingPage/>}/>
                    <Route path='about' element={<AboutPage/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;
