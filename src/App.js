import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';
import Gallery from './component/Gallery';
import Contact from './component/Contact';
import Aboutus from './component/Aboutus';
import Diabbp from './component/Diabbp';
import Heart from './component/Heart';
import Child from './component/Child';
import Tyhro from './component/Tyhro';
import Resip from './component/Resip';
import Gast from './component/Gast';
import Head from './component/Head';
import Learnig from './component/Learnig';
import Sleep from './component/Sleep';
import Epilepsy from './component/Epilepsy';
import Neurometa from './component/Neurometa';
import Behaviour from './component/Behaviour';
import AfterBefore from './component/Afterbefore';
import NewsPhotos from './component/NewsPhotos';

function App() {
  return (
    <div className="App">  
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/aboutus' element={<Aboutus/>} />
    <Route path='/gallery' element={<Gallery/>}/>
    <Route path='/After-before' element={<AfterBefore/>} />
    <Route path='/NewsPhotos' element={<NewsPhotos />} />
    <Route path='/contactus' element={<Contact/>}/>
    <Route path='/diabetes' element={<Diabbp/>}/>
    <Route path='/heart' element={<Heart/>}/>
    <Route path='/children' element={<Child/>}/>
    <Route path='/respiration' element={<Resip/>}/>
    <Route path='/tyhroid' element={<Tyhro/>}/>
    <Route path='/gastric' element={<Gast/>}/>
    <Route path='/headache' element={<Head/>}/>
    <Route path='/learnigdisability' element={<Learnig/>}/>
    <Route path='/sleepdisorder' element={<Sleep/>}/>
    <Route path='/epilepsy' element={<Epilepsy/>}/>
    <Route path='/neurometabolic' element={<Neurometa/>}/>
    <Route path='/behavioural' element={<Behaviour/>}/>
    {/* <Route path='/' element={<Home/>}/> */}


    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
