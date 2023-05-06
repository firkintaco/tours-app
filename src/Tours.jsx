/* eslint-disable react/prop-types */
import Tour from "./Tour";

const Tours = (props) => {
  const { tours, removeTour } = props;

  return (
    <div className="tours">
      {tours.map((tour) => {
        return <Tour tour={tour} key={tour.id} removeTour={removeTour} />;
      })}
    </div>
  );
};

export default Tours;
