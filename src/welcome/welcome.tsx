import { useStorage } from "@startpage/local-storage";
import { useDate } from "../hooks/useDate";
import './welcome.scss';

export const Welcome = (): JSX.Element => {

    const [testValue, setTestValue] = useStorage("Local Storage Test", 0);
    // TODO: This username can be a prop that is passed into the component in the future. Username state can be managed within settings
    const [username, setUsername] = useStorage("Username", "Bassic");
    const { date, time, message } = useDate();

    return (
        <div className="welcome-section">
            <p>{message}, {username}</p>
            <p>{date}</p>
            <p>{time}</p>
            <button
                onClick={() => setTestValue(testValue + 1)}
                className='update-button'>Update Counter</button>
            <button
                onClick={() => setTestValue(0)}
                className='reset-button'>Reset Counter</button>
            <p>Current Count: {testValue}</p>
        </div>
    )
};