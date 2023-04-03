import React from 'react';

export default function CityDetails({city}) {
    return(
        <div className="max-h-full flex items-center justify-center py-4 opacity-90">
            <div className="flex flex-col bg-white rounded-lg p-4 w-full max-w-lg dark:bg-gray-700 shadow-lg heropattern-diagonallines-gray-600">
                <div className="font-bold text-xl text-gray-100">{city.location.name},<span className="text-xl">{city.location.region}</span></div>
						<div className="text-sm text-gray-100">{city.location.localtime}</div>
						<div className="text-sm text-gray-100">{city.location.country}</div>
						<div className="mt-6 text-6xl  self-center inline-flex items-center justify-center rounded-lg h-24 w-54  ">
                            <img className="w-42 h-60" src={city.current.condition.icon} alt={city.current.condition.text}/>
						</div>
						<div className="flex flex-row items-center justify-center mt-20 ">
							<div className="font-medium text-gray-100 text-6xl">{city.current.temp_c}°C</div>
							<div className="flex flex-col items-center ml-6">
								<div className="font-medium text-gray-100 text-sm">{city.current.condition.text}</div>
								<div className="mt-1">
									<span className="text-sm font-light text-gray-100">Real Feel {city.current.feelslike_c}°C</span>
								</div>
								<div >
									<span className="text-sm font-light text-gray-100">AQI</span>
								</div>
							</div>
						</div>
						<div className="flex flex-row justify-around mt-6 p-2 dark:bg-gray-500 rounded-lg">
							<div className="flex flex-col items-center">
								<div className="font-medium text-sm text-gray-100">Wind</div>
								<div className="text-sm text-gray-100">{city.current.wind_kph}km/h</div>
							</div>
							<div className="flex flex-col items-center">
								<div className="font-medium text-sm text-gray-100">Humidity</div>
								<div className="text-sm text-gray-100">{city.current.humidity}%</div>
							</div>
							<div className="flex flex-col items-center">
								<div className="font-medium text-sm text-gray-100">Visibility</div>
								<div className="text-sm text-gray-100">{city.current.vis_km}km</div>
							</div>
                            <div className="flex flex-col items-center">
								<div className="font-medium text-sm text-gray-100">UV Index</div>
								<div className="text-sm text-gray-100">{city.current.uv}</div>
							</div>
						</div>
                        
            <div className="items-center my-4 justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                <div className="w-full bg-gray-800  text-white rounded-lg inline-flex items-center justify-center dark:bg-gray-500 ">
                    <div className="text-center">
                    <div className="grid grid-cols-1 divide-y">
                    <h4 className='py-2 font-bold'>Air Quality Index</h4>
                        <div className="mb-1 mt-1 text-xs">CO <span className="mt-1 font-sans text-sm font-semibold"> {city.current.air_quality.co}</span></div>
                        <div className="mb-1 mt-1 text-xs">NO2 <span className="mt-1 font-sans text-sm font-semibold"> {city.current.air_quality.no2}</span></div>
                        <div className="mb-1 mt-1  text-xs">O3 <span className="mt-1 font-sans text-sm font-semibold"> {city.current.air_quality.o3}</span></div>
                        <div className="mb-1 mt-1 text-xs">SO2 <span className="mt-1 font-sans text-sm font-semibold"> {city.current.air_quality.so2}</span></div>
                        <div className="mb-1 mt-1 text-xs">PM2.5<span className="mt-1 font-sans text-sm font-semibold"> {city.current.air_quality.pm2_5}</span></div>
                        <div className="mb-1 mt-1 text-xs">PM10<span className="mt-1 font-sans text-sm font-semibold"> {city.current.air_quality.pm10}</span></div>
                        </div>
                    </div>
                </div>
                <div>
                <div className="w-full sm:w-auto mb-4 bg-gray-800   text-white rounded-lg inline-flex items-center justify-center px-7 py-2.5 dark:bg-gray-500 ">
                    <div className="text-left">
                    <div className=" grid grid-cols-1 divide-y">
                     
                       <div className="mb-1 text-xs">Wind Direction <span className="mt-1 font-sans text-sm font-semibold"> {city.current.wind_dir}</span></div>
                       <div className="mb-1 text-xs">Wind Degree <span className="mt-1 font-sans text-sm font-semibold"> {city.current.wind_degree}°</span></div>
                       <div className="mb-1 text-xs">Cloud<span className="mt-1 font-sans text-sm font-semibold"> {city.current.cloud}</span></div>
                       <div className="mb-1 text-xs">Gust <span className="mt-1 font-sans text-sm font-semibold"> {city.current.gust_kph}km/h</span></div>
                       </div>
                    </div>
                </div>
                <div  className="w-full sm:w-auto bg-gray-800  text-white rounded-lg inline-flex items-center justify-center px-7 py-2.5 dark:bg-gray-500 ">
                    <div className="text-left">
                    <div className=" grid grid-cols-1 divide-y">
                       <div className="mb-1 text-xs">Latitude <span className="mt-1 font-sans text-sm font-semibold"> {city.location.lat}km/h</span></div>
                       <div className="mb-1 text-xs">Longitude <span className="mt-1 font-sans text-sm font-semibold"> {city.location.lon}km/h</span></div>
                       </div>
                    </div>
                </div>
            </div>
                </div>
                </div>
             </div>
       
    )
}




















// <ul>
// <li>City: {city.location.name}</li> 
// <li>State: {city.location.region}</li> 
// <li>Country:{city.location.country}</li> 
// <li>Localtime: {city.location.localtime}</li> 
// <li>Last-Updated: {city.current.last_updated}</li> 
// <li>Temperature: {city.current.temp_c}</li> 
// <li>Wind kph: {city.current.wind_kph}</li>
// <li>Wind Direction: {city.current.wind_dir}</li>
// <div>
// <li>Condition: {city.current.condition.text}</li>
// <img src={city.current.condition.icon} alt={city.current.condition.text}/>
// <li>Latitude: {city.location.lat}</li> 
// <li>Longitude: {city.location.lon}</li> 
// <li>Humidity: {city.current.humidity}</li>
// <li>Humidity: {city.current.vis_km}</li>
// <li>UV Index: {city.current.uv}</li>
// </div>
// <div>
// <li>Co2 index: {city.current.air_quality.co}</li>
// <li>Ozone index: {city.current.air_quality.o3}</li>
// <li>Ozone index: {city.current.air_quality.o3}</li>
// </div>
// </ul>



