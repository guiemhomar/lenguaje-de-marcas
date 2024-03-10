import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inici from './Inici';
import PuntsInteres from './PuntsInteres';
import Restaurants from './Restaurants';
import Hotels from './Hotels';
import ActivitatsLleure from './ActivitatsLleure';

const Aplicacio = () => {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Navbar</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                    </div>
                </nav>
                <Route path="/" element={<Inici />} />
                <Route path="/punts-interes" element={<PuntsInteres />} />
                <Route path="/restaurants" element={<Restaurants />} />
                <Route path="/hotels" element={<Hotels />} />
                <Route path="/activitats-lleure" element={<ActivitatsLleure />} />
            </div>
        </Router>
    );
}

export default Aplicacio;