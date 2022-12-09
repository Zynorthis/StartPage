import { useEffect, useState } from "react";

interface DateData {
    time: string;
    date: string;
    message: string;
}

export const useDate = (): DateData => {
    const locale = 'en';
    const [today, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, []);
    
    const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;
    
    const hour = today.getHours();
    const message = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}`;
    
    // TODO: There can potentially be settings in the future for how the date and time are displayed.
    //       If the user can toggle showing the seconds for example, the options object being passed
    //       into toLocaleTimeString should become a variable and not have the 'second' parameter
    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric', second: 'numeric' });
  
    return {
      date,
      time,
      message
    };
};