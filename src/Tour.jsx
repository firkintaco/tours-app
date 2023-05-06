import { useState } from "react";

/* eslint-disable react/prop-types */
const Tour = (props) => {
  const { id, name, info, image, price } = props.tour;
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="single-tour" key={id}>
      <p className="tour-price">€{price}</p>
      <img className="img" src={image} alt={name} />
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {expanded ? info : info.substring(0, 100)}
          <br />
          {expanded ? (
            <>
              <button
                className="info-btn"
                onClick={() => setExpanded(!expanded)}
              >
                Close
              </button>
            </>
          ) : (
            <button className="info-btn" onClick={() => setExpanded(!expanded)}>
              Read more
            </button>
          )}
        </p>
        <button
          className="delete-btn btn btn-block"
          onClick={() => props.removeTour(id)}
        >
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default Tour;
