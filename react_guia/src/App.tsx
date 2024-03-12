import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inici from './Inici';
import PuntsInteres from '../../react_guia/src/PuntsInteres';
import Restaurants from '../../react_guia/src/Restaurants';
import Hotels from '../../react_guia/src/Hotels';
import ActivitatsLleure from '../../react_guia/src/ActivitatsLleure';

const Aplicacio = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">Inici</Link>
              </li>
              <li className="nav-item">
                <Link to="/punts-interes" className="nav-link">Punts d'Interès</Link>
              </li>
              <li className="nav-item">
                <Link to="/restaurants" className="nav-link">Restaurants</Link>
              </li>
              <li className="nav-item">
                <Link to="/hotels" className="nav-link">Hotels</Link>
              </li>
              <li className="nav-item">
                <Link to="/activitats-lleure" className="nav-link">Activitats de Lleure</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Inici />} />
          <Route path="/punts-interes" element={<PuntsInteres />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/activitats-lleure" element={<ActivitatsLleure />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Aplicacio;