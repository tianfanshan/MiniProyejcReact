import './App.css';
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import ListNews from './components/ListNews/ListNews'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/form' element={<Form/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/list' element={<ListNews/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
