import './App.css';
import SignUp from './components/SignUp';
import IntroContent from './components/IntroContent';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <IntroContent />
          </div>
          <div className='col-lg-6 my-5'>
            <SignUp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
