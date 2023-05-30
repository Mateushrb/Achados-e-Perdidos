import { useState } from 'react';
import './styles/App.scss';
import Content from './components/Content';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="page">
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  )
}

export default App
