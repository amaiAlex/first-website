import { Fragment } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import FirstBlock from './components/FirstBlock';
import NavBar from './components/NavBar';

function App() {
  return (
    <Fragment>
      <NavBar />
      <BrowserRouter>
        <Routes>
          {/* If you want to add a new page, just add it in the same way as the line below */}
          <Route path="/" element={<FirstBlock />   } />
        </Routes>
      </BrowserRouter>
       
    </Fragment>

  );
}

export default App;
