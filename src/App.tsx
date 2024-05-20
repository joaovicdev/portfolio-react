import React from 'react';
import { Header, About, Services, Footer, Projects, FloatButton } from './components';
import '_default.scss';

function App() {
  return (
    <React.Fragment>
      <Header />
      <About />
      <Services />
      <Projects />
      <FloatButton />
      <Footer />
    </React.Fragment>
  );
}

export default App;
