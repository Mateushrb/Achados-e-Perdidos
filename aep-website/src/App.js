import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';

import './App.css';
import Cookie from './components/Cookies/Cookies';

function App() {

  return (
    <>
    <div className="App">
      <Header />
      <Content />
      <Footer />
      <WhatsAppButton />
      <Cookie />
    </div>
    </>
  );
}

export default App;
