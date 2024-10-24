import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Detailes from './pages/Detailes';
import Favourite from './pages/Favourite';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail' element={<Detailes/>}/>
        <Route path='/fav' element={<Favourite/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
