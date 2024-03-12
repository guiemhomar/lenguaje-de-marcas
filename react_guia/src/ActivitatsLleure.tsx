import React from 'react';
import messi from "./messipixel.png";

const ActivitatsLleure = () => {
  return (
    <div>
      <h2>Activitats de Lleure</h2>
      <div className="card">
        <img src={messi} className="card-img-top" style={{height: "60vh" , width: "40vh"}} alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Messi</h5>
            <a href="https://es.wikipedia.org/wiki/Lionel_Messi" className="btn btn-primary">Go somewhere</a>
          </div>
      </div>
    </div>
  );
}

export default ActivitatsLleure;