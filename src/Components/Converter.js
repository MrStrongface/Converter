import React from "react";
import './Converter.css';
import { useState, useEffect } from "react";
import axios from "axios";


export const Converter = () =>{

    const [text1, setText1] = useState(0);
    const [text2, setText2] = useState(0);
    const [value1, setValue1] = useState(1);
    const [value2, setValue2] = useState(1);
    const [country1, setCountry1] = useState("");
    const [country2, setCountry2] = useState("");
    

    useEffect(()=>{
           getData();
    },[]);
    const getData = async () =>{
         const result = await axios.get("https://cdn.cur.su/api/latest.json")
         setCountry1(result.data.rates);
         setCountry2(result.data.rates);

    };
    const reset = () =>{
         setText1("");
         setText2("");
    };
    
    
   return(
       <div className="HeaderCon">
          
       <h1>Converter</h1>
       <form >
          <div className="converter">
           <div className="lBlock">
               <input type="text"  value = {text1} onChange ={(e) =>setText1(e.target.value) || setText2((value1/value2) * e.target.value)}  />
               <select   name ="select" onChange ={(e) =>setValue2(e.target.value)}> 
               {Object.keys(country1).map((value,index)=><option key={index} value={country1[value]}>{value}</option>)}
               </select >
           </div>
      
               <div className="rBlock">
                  <input type="text"  value ={text2} onChange ={(e) =>setText2(e.target.value) || setText1((value2/value1) * e.target.value)}  />
                  <select  onChange ={(e) =>setValue1(e.target.value)}> 
                  {Object.keys(country2).map((value,index)=><option key={index} value={country1[value]}>{value}</option>)} 
                   </select>
                 </div>
            </div>
            </form>
            <button  onClick={reset} variant="contained" className='button'>Reset</button>

           
       </div>
   )
}