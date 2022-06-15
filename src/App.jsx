import './App.css';
import Footer from './components/Footer/Footer'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import ListNews from './components/ListNews/ListNews'
import {BrowserRoute,Router,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRoute>
      
      <Footer/>
      <Form/>
      <Header/>
      <Home/>
      <ListNews/>
      </BrowserRoute>
    </div>
  );
}

export default App;
