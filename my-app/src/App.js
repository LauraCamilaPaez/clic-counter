import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import freeCodeCampLogo from './images/freeCodeCampLogo.png';
import { useState } from 'react';

function App() {

    const [numClicks, setNumClicks ] = useState(0);

    const manageClick = () => {
        setNumClicks(numClicks + 1);
    }

    const counterRestart = () => {
        setNumClicks(0);
    }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-container'>
          <img className='freecodecamp-logo' src={freeCodeCampLogo} alt='FreeCodeCamp logo'/>
      </div>
        <div className='principal-container'>
            <Counter numClicks={ numClicks }
            />

            <Button text='Click' isButtonClick={true} manageClick={manageClick} />
            <Button text='Restart' isButtonClick={false} manageClick={counterRestart} />
        </div>
    </div>
  );
}

export default App;
