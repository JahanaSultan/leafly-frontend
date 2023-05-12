import Home from "./Home";
import "./assets/css/style.css";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
  );
}

export default App;
