import './App.css';
import {Header,Footer} from './Components';
import {Pts,Airbnb,Cwp} from './Pages'
import {Route,Routes} from 'react-router-dom';
import {useStateContext} from './context/ContextProvider'

function App() {
  const {themesettings}= useStateContext();
  return (
    <div className=" w-screen h-auto flex flex-col bg-primary">
    <Header/>
    <div>
    {themesettings && <Cwp/> }
    <Routes>
    <Route path='/' element={<Airbnb/>}/>
    <Route path='/place' element={<Pts/>}/>
    </Routes>
    </div>
    
    <Footer/>
    </div>
  );
}

export default App;
