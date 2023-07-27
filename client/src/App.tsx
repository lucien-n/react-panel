import React from 'react';
import './App.css';
import { Container } from '@mui/material';
import Panel from './components/Panel';

function App() {
  return <Container sx={{ height: '100vh' }}>
    <Panel></Panel>
  </Container>;
}

export default App;
