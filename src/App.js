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
        <Dictionary defaultKeyword="book" />
      </main>
      <footer className='appFooter'><small>Coded by Nikolett Hartmann and is open-sourced on <a href='https://github.com/niki0410/dictionary-project' target='_blank' rel="noreferrer">GitHub</a> and hosted on <a href='https://dictionary-app-niki.netlify.app/' target='_blank' rel="noreferrer">Netlify</a></small></footer>
    </div>
    </div> 
  );
}

export default App;
