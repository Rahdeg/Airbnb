import './App.css';
import {Header,Home,Footer} from './Components';
import {Pts} from './Pages'
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className=" w-screen h-auto flex flex-col bg-primary">
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/place' element={<Pts/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
