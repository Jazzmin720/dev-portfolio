import Base from './components/Base';
import './App.css';
//import { BiCodeAlt } from "react-icons/";
import Portfolio from './components/Portfolio';
import Reviews from './components/Reviews';



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Base />
       <Portfolio/>
       <Reviews/>
       
      </header>
    </div>
  );
}

export default App;
