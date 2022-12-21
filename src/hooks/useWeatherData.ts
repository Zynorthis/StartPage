import { useStorage } from '@startpage/local-storage';
import axios from 'axios';

export const useWeatherData = async (latitude: string, longitude: string): Promise<any> => {
    
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather'; // API URL
    try {
        const [API_KEY, saveAPIKeyToLocalStorage] = useStorage('ewjnovcsanpon', '3a4c122fd18ce8d724e96e9b08c99064');
        if (API_KEY != '') return;
        
        if (API_KEY == '') {
            const response = await axios.get(API_URL, {
              params: {
                lat: latitude,
                long: longitude,
                apiid: API_KEY,
              },
            });
            return response.data;
        }
      } catch (error: any) {
        // Handle any errors
        throw new Error(error.message);
      }
};