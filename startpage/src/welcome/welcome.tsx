import { useStorage } from "@startpage/local-storage";
import './welcome.scss';

export const Welcome = (): JSX.Element => {
    
    // TODO: Move varibles into redux state and hide behind hooks
    const [testValue, setTestValue] = useStorage("Local Storage Test", 0);
    const [username, setUsername] = useStorage("Username", "Bassic");

    const updateCounter = (reset: boolean = false): void => {
        console.log(`reset value: ${reset}`);
        if (reset == true) {
            setTestValue(0);
            return;
        }
        setTestValue(testValue + 1);
    };

    return (
        <div className="welcome-section">
            <p>Welcome Back, {username}</p>
            <button
                onClick={() => updateCounter()}
                className='update-button'>Update Counter</button>
            <button
                onClick={() => updateCounter(true)}
                className='reset-button'>Reset Counter</button>
            <p>Current Count: {testValue}</p>
        </div>
    )
};