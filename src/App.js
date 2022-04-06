import './App.css';
import Layout from './components/layout/Layout';
import { useState, useContext } from 'react';
import Footer from './components/UI/Footer';
import {Context} from './Context';
function App() {
  return (
      <div className="App">
        <Layout/>
        <Footer/>
      </div>
  );
}

export default App;
