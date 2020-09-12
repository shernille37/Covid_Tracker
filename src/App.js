import React, { Fragment } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Fragment>
      <Dashboard />

      <Footer />
    </Fragment>
  );
}

export default App;
