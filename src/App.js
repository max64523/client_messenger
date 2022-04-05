import './App.css';
import Layout from './components/layout/Layout';
import { useState } from 'react';
import Footer from './components/UI/Footer';
function App() {
  const [isAuth,setIsAuth] = useState(false);

  return (
    <div className="App">
      <Layout isAuth={isAuth} setIsAuth={setIsAuth}/>
      <Footer/>
    </div>
  );
}

export default App;
