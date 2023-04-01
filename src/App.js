
import './App.css';
import { BrowserRouter ,Route ,Routes} from 'react-router-dom'
import Home from './components/Home';
import Room from './components/room';
function App() {
  return (
    <>
       
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/room/:roomid'  element={<Room/>}/>
        </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;
