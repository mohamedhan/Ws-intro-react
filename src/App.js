import logo from './logo.svg';
import './App.css';

import  {ComponentOne as A}  from "./components/ComponentOne"
import NavBar from './components/NavBar';
import ComponentTwo from './components/ComponentTwo';
function App() {
  let a=[1,2,3,4]
  return (
    <div className="App">
      {
        a.map(el=> <NavBar />)
      }
      
     <A />
     <ComponentTwo />
    </div>
  );
}

export default App;
