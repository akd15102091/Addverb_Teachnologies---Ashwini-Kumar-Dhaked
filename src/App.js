import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css" 
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import AllCountries from "./components/AllCountries";

function App() {

  const [inputData, setInputData] = useState("") ;
  const [asiaData, setAsiaData] = useState([])

  useEffect(()=>{
    axios.get("https://restcountries.com/v3.1/region/asia")
    .then(res => {
      console.log(res.data);
      let data = res.data;
      data.sort((a,b) => (a.name.common > b.name.common) ? 1 : ((b.name.common > a.name.common) ? -1 : 0))
      setAsiaData(data)
    })
    .catch(err => console.log(err))

  },[])

  useEffect(()=>{
    if(inputData!==""){
      let selectedData = [];
      for(let i=0;i<asiaData.length;i++){
        if(asiaData[i].name.common.toLowerCase().match(inputData.toLowerCase())){
          selectedData.push(asiaData[i]) ;
        }
      } 
      selectedData.sort((a,b) => (a.name.common > b.name.common) ? 1 : ((b.name.common > a.name.common) ? -1 : 0))
      setAsiaData(selectedData);
      // console.log(asiaData)
    }
  },[inputData])

  

  return (
    <div className="mainPage">
      <div className="header">
        Where in ASIA ?
      </div>
      <br />

      <div className="contaner-fluid mb-5">
          <div className="row">
              <div className="col-11 mx-auto">
                  <div className="row gy-5">
                  <div className="col-md-7 col-12 mx-auto ">
                    <div className="searchSection">
                      <i className="fas fa-search searchicon"></i>
                      <input value={inputData} className="search" placeholder="Search for a country..." 
                        onChange={(e)=>setInputData(e.target.value)} />
                    </div>
                  </div>
                  <div className="col-md-3 col-12 mx-auto "></div>
                  <div className="col-md-2 col-12 mx-auto ">
                    <button type="button" className="refreshbutton" onClick={()=>window.location.reload()}>Refresh</button>
                  </div>
                  </div>
              </div>
          </div>
      </div>

      
      <br /><br />
      <div>
        <AllCountries data={asiaData} />
      </div>
    </div>
  );
}

export default App;
