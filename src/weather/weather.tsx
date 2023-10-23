import { useStorage } from '@startpage/local-storage';
import { useWeatherData } from '../hooks/useWeatherData';
import './weather.scss';

export const Weather = (): JSX.Element => {
    let lat = '';
    let long = '';
    const [API_KEY, saveAPIKeyToLocalStorage] = useStorage('ewjnovcsanpon', 'bfb3389090579cea93abddee253b16f5');

    console.log('getting navigator permissions...');
    navigator.permissions.query({ name: 'geolocation' })
        .then((result) => {
            console.log(`Result State: ${result.state}`);
        })

    const button = document.getElementById("weather-button");
    if (button !== null) {
        button.addEventListener("click", () => {
            console.log(`Naviagtor: ${navigator.geolocation}`);
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(`${position.coords.latitude}`);
                lat = `${position.coords.latitude}`;
                long = `${position.coords.longitude}`;
            });
        });
    }

    const weatherData = useWeatherData(lat, long);

    return (
        <>
            <div className='api-key'>
                <button id='weather-button'>Get Location Data</button>
                <input 
                    type='text'
                    placeholder='Enter API Key Here'
                    value={API_KEY}
                    onChange={(value) => {saveAPIKeyToLocalStorage(`${value}`)}} />
            </div>
            <div className='weather-section'>Current Weather Data: {`${weatherData}`}</div>
        </>
    )
};