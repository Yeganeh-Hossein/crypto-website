import React, { useEffect, useState } from "react";
import Spinner from "../components/ui/spinner.component";
import axios from "axios";
import { baseUrl } from "../constants/api";

const Homepage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios(baseUrl)
      .then((response) => {
        setData(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        setError("An error occurred");
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Crypto Tracking</h1>
          <h4>A place to manage all of your trade informations and actions</h4>
          <h4>Do not forget to always using assets and risk management!!!</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {loading ? <Spinner /> : error !== "" ? <h1>{error}</h1> : <h1>Data is ready</h1>}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
