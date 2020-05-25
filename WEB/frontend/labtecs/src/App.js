import React from 'react';
import Routes from './routes';
import GlobalStyles from './styles/global'
import SignIn from '../src/pages/SignedIn/index'

function App() {
  return (
    <>
    <Routes></Routes>
    <GlobalStyles></GlobalStyles>
    <SignIn></SignIn>
    </>
  );
}

export default App;
