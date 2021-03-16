import './App.css';
import React from 'react';
import { Container } from '@material-ui/core'
import ScreenOne from './components/screen-one'

function App() {
  return (
    <div className="App" >
      <Container maxWidth='sm' >
        <ScreenOne />
      </Container>

    </div>
  );
}

export default App;
