import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body'
import Body1 from './components/Body1';

function App() {
  let name = "ammulu"
  console.log(name)
  
  return (
    <div className='main-page'>
      <Header /> 
      <Body1 />
      <Footer />
    </div>
  );
}

export default App;
