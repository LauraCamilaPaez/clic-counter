import './App.css';
import Button from './components/button';
import freeCodeCampLogo from './images/freeCodeCampLogo.png';

function App() {

    const manageClick = () => {
        console.log('Click');
    }

    const counterRestart = () => {
        console.log('Restart');
    }

  return (
    <div className='App'>
      <div className='freecodecamp-logo-container'>
          <img className='freecodecamp-logo' src={freeCodeCampLogo} alt='FreeCodeCamp logo'/>
      </div>
        <div className='principal-container'>
            <Button text='Click' isButtonClick={true} manageclick={manageClick} />
            <Button text='Restart' isButtonClick={false} manageClick={counterRestart}/>
        </div>
    </div>
  );
}

export default App;
