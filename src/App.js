import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import CreateForm from './pages/CreateForm';
import Homepage from './pages/Homepage';
import NavMenu from './components/Nav';
import Demopage from './pages/Demopage';
import ViewForm from './pages/ViewForm'
import './App.css'
import { useEffect } from 'react';

function App() {

  return (
    <BrowserRouter >
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
              <Link className="navbar-brand" to="/">Form Builder</Link>
          </div>
      </nav> */}
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create-form" element={<CreateForm />} />
        <Route path="/form-list" element={<Demopage />} />
        <Route path="/form-view/:id" element={<ViewForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
