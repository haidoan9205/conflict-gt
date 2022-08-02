import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Feed from './components/BodyComponents/Feed';

function App() {
  return (
    <div className="App">
      <Header/>
      <Body></Body>
    </div>
  );
}

export default App;
