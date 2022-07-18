import { Fragment } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainPage from './components/MainPage';
import Tools from './components/Tools';
import Blog from './components/Blog';
import NavBar from './components/NavBar';

function App() {
  return (
    <Fragment>
      <NavBar />
      <BrowserRouter>
        <Routes>
          {/* If you want to add a new page, just add it in the same way as the line below */}
          <Route path="/" element={<MainPage />} />
          <Route path="/1" element={<Tools />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
