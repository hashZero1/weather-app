import React ,{useState} from 'react'
import axios from 'axios';
import useForm from './Hooks/useForm';
import CityDetails from './CityDetails';
import {motion as m} from 'framer-motion'

function WeatherApi(){
    //custom hook to controll form input
    const [cityName , handleChange] = useForm("");
    //setting the city by cityName
    const [city, setCity] = useState()
    const Base_URL = `https://api.weatherapi.com/v1/current.json?key=46a14caf5d5c4bde98c95253222512&q=${cityName}&aqi=yes`;

    //search for city
    const searchCity = async () => {
        try{
            const config = {headers: {Accept: 'application/json'}}
            const res = await axios.get(Base_URL,config)
            setCity(res.data)
        }catch(err){
            alert("Please Enter The Correct City Name")
        } 
    }
    return(
      <div className="min-h-screen flex items-center justify-center dark:bg-gray-800 heropattern-topography-gray-700">
      <div className="flex flex-col rounded p-4 w-full max-w-lg ">
           <m.h1   drag
    dragConstraints={{
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }} className="text-3xl text-gray-100 mb-4 rounded-lg font-semibold p-4 dark:bg-gray-700 heropattern-diagonallines-gray-600">Weather APP</m.h1>

        <form onSubmit={(e) => {e.preventDefault();}}>
        <div  className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input value={cityName} onChange={handleChange} type="search" id="search" className="block w-full p-4 pl-10 focus:outline-none text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-100   dark:border-gray-600 dark:placeholder-gray-400" placeholder="Search for City" required/>
        <m.button whileHover={{scale: 1.1}} onClick={() => searchCity()} className="text-white absolute right-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-700 dark:hover:bg-red-800">Search</m.button>
        </div>
        {city?
        <>  
        <CityDetails city={city}/>
        </>
        : null }
        </form>
        </div>
        </div>
    
    )
}

export default WeatherApi;



