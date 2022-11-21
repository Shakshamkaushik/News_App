import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {BrowserRouter , Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = () => {
 
 const pageSize = 9;
  const [progress , setProgress] = useState(0)
  // setProgress = (progress) => {
  //   this.setState({progress : progress})
  // }
    return (
     
      <div>
        <BrowserRouter>
      <Navbar />
      <LoadingBar
      height={3}
        color='blue'
        progress={progress}
      />

      <Routes>
        <Route exact path="/" element={<News setProgress = {setProgress}  key="general" pageSize = {pageSize} country="in" category="general"/>} />
        <Route exact path="/business" element={<News setProgress = {setProgress}  key="business" country="in" pageSize = {pageSize} category="business"/>} />
        <Route exact path="/entertainment" element={<News setProgress = {setProgress}  key="entertainment" pageSize = {pageSize} country="in" category="entertainment"/>} />
        <Route exact path="/general" element={<News setProgress = {setProgress}  key="general" country="in" pageSize = {pageSize} category="general"/>} />
        <Route exact path="/health" element={<News setProgress = {setProgress}  key="health" country="in" pageSize = {pageSize} category="health"/>} />
        <Route exact path="/science" element={<News setProgress = {setProgress}  key="science" country="in" pageSize = {pageSize} category="science"/>} />
        <Route exact path="/sports" element={<News setProgress = {setProgress}  key="sports" country="in" pageSize = {pageSize} category="sports"/>} />
        <Route exact path="/technology" element={<News setProgress = {setProgress}  key="technology" country="in" pageSize = {pageSize} category="technology"/>} />
      </Routes>
      </BrowserRouter>
      </div>
      
    )
  }
  App.defaultProps = {
    country: 'in',
    pageSize: 8,
    category:'general',
  }

  export default App