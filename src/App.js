import './App.css';
import {BrowserRouter as Router , Routes, Route } from 'react-router-dom'

// import Home from './components/Home';
// import { About } from './components/About';
// import Shop from './components/Shop';
// import Products from './components/Products';
import Usestatestring from './components/usestate/Usestatestring';
import Usestateobject from './components/usestate/Usestateobject';
import Usestatearray from './components/usestate/Usestatearray';
import Singleinput from './components/forms/Singleinput';
import Multipleinputs from './components/forms/Multipleinputs';
import Useref from './components/useref/Useref';
import Useeffect from './components/useeffect/Useeffect';
import Simplereturn from './components/conditionalrendering/Simplereturn';
import Useeffectfetch from './components/useeffect/Useeffectfetch';
import Useeffectcleanup from './components/useeffect/Useeffectcleanup';
import Multiplereturns from './components/conditionalrendering/Multiplereturns';
import Fetch from './components/customhooks/Fetch';
import Error from './components/Error';
import Person from './components/Person';
import {useFetch} from './components/customhooks/Usefetch'
import Navbar from './components/Navbar';
 import Propdrilling from './components/propdrilling/Propdrilling';
 import Usecontext from './components/usecontext/Usecontext';   
import UseReducer from './components/usereducer'
 //  ROUTING

function App() {
  return (
    // <div>
    //   {/* <Home></Home>
    //   <About></About>
    //   <About></About>
    //   <About/> */}
    //   {/* <Shop/> */}
    //   {/* <Products/> */}
    //   {/* <Usestatestring/> */}
    //   {/* <Usestateobject/> */}
    //   {/* <Usestatearray/> */}
    //   {/* <Singleinput/> */}
    //   {/* <Multipleinputs/> */}
    //   {/* <Useref/> */}
    //   {/* <Useeffect/> */}
    //   {/* <Simplereturn/> */}
    //   {/* <Useeffectfetch/> */}
    //   {/* <Useeffectcleanup/> */}
    //   {/* <Multiplereturns/> */}
    //   {/* <useFetch/> */}
    //   <Fetch/>
    // </div>
  
  <Router>
    {/* <Propdrilling/> */}
    <Navbar/>
    <Routes>
      <Route path='/' element={<Fetch/>}></Route>
      <Route path='/usestatebasics' element={<Usestatestring/>}></Route>
      <Route path='/usestateobjects' element={<Usestateobject/>}></Route>
      <Route path='/usestatearray' element={<Usestatearray/>}></Route>
      <Route path='/singleinput' element={<Singleinput/>}></Route>
      <Route path='/multipleinput' element={<Multipleinputs/>}></Route>
      <Route path='/useref' element={<Useref/>}></Route>
      <Route path='/useeffect' element={<Useeffect/>}></Route>
      <Route path='/simplereturn' element={<Simplereturn/>}></Route>
      <Route path='/useeffectfetch' element={<Useeffectfetch/>}></Route>
      <Route path='/useeffectcleanup' element={<Useeffectcleanup/>}></Route>
      <Route path='/fetch' element={<Fetch/>}></Route>
      <Route path='/multiplereturns' element={<Multiplereturns/>}></Route>
      {/* <Route path="/person/:id" element={<Person/>}></Route> */}
      <Route path="*" element={<Error/>}></Route>
      <Route path='usecontext' element={<Usecontext/>}></Route>
      <Route path='usereducer' element={<UseReducer/>}></Route>
      <Route path='propdrilling' element={<Propdrilling/>}></Route>
    </Routes>
  </Router>
  );
}

export default App;
