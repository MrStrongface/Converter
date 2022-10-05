import './Header.css';
import React from 'react';
import axios from "axios";

export const Header = () =>{

     const [country1, setCountry1] = React.useState("");
     const [country2, setCountry2] = React.useState("");
     

     React.useEffect(()=>{
          getData();
   },[]);
   const getData = async () =>{
        const result = await axios.get("https://cdn.cur.su/api/latest.json")
        const USD = result.data.rates['USD'] * result.data.rates['UAH']
        const EUR = (result.data.rates['UAH']/result.data.rates['EUR']) * 1;
        setCountry1(USD);
        setCountry2(EUR);
        console.log(result.data.rates['UAH']);
        }
     return (
          <div className="Header">
               <p className="ptext"> UAH CURRENT EXCHANGE RATE </p>
               <p>USD {country1}  </p> 
               <p>EUR {country2}  </p> 
               
               
          </div>
        );
     }