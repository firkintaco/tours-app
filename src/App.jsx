import { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setTours(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const removeTour = (id) => {
    setTours(() => {
      console.log(id);
      return tours.filter((tour) => tour.id !== id);
    });
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <main>
      <h1 className="title">Tours</h1>
      <hr className="title-underline" />
      {tours.length === 0 && (
        <button
          onClick={fetchData}
          className="btn btn-hipster"
          style={{ margin: "5rem auto" }}
        >
          Refresh
        </button>
      )}
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
