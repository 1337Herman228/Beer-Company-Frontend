import './App.css';
import NavScrollExample from '../navbar/Navbar';
import Snowfall from '../snow/FallingSnow';
import {useSelector } from 'react-redux';

function App() {

  const { isSnow } = useSelector(state => state.basic);

  return (
    <>
    <Snowfall className="snow" isSnow={isSnow}/>
      <div className="App-header">
          <NavScrollExample />
        
      </div>
    </>
    
  );
}
export default App;
