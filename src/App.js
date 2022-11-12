import './App.css';
import {Header,Home,Menu,About,Footer} from './Components'

function App() {
  return (
    <div className=" w-screen h-auto flex flex-col bg-primary">
    <Header/>
    <Home/>
    <Menu/>
    <About/>
    <Footer/>
    </div>
  );
}

export default App;
