import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { Welcome } from './welcome/welcome'
import { Search } from './search/search';
import { Weather } from './weather/weather';

export const App = () => {

  return (
    <div className="App">
      <a className='settings' href='https://jacobt.dev/'><FontAwesomeIcon icon={faGear} /></a>
      <Welcome />
      <Weather />
      <Search />
    </div>
  );
}
