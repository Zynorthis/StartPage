import { useStorage } from "@startpage/local-storage";
import './welcome.scss';

export const Welcome = (): JSX.Element => {
    
    // TODO: Move varibles into redux state and hide behind hooks
    const [testValue, setTestValue] = useStorage("Local Storage Test", 0);
    const [username, setUsername] = useStorage("Username", "Bassic");

    return (
        <div className="welcome-section">
            <p>Welcome Back, {username}</p>
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