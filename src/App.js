import logo from './logo.png';
import Dictionary from './dictionary';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="appHeader">
        <img src={logo} className="img-fluid appLogo" alt="logo" />
      </header>
      <main>
        <Dictionary/>
      </main>
      <footer className='appFooter'><small>Coded by SheCodes</small></footer>
    </div>
    </div> 
  );
}

export default App;
