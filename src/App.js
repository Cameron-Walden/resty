import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";

import Header from "./components/header";
import Footer from "./components/footer";
import Form from "./components/form";
import Results from "./components/results";

const App = () => {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [results, setResults] = useState({});

  useEffect(() => {
    const apiUrl = requestParams.url;
    axios
      .get(apiUrl)
      .then((response) => {
        setResults(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const callApi = async (apiParams) => {
    const apiUrl = apiParams.url;
    const response = await axios.get(apiUrl);

    const data = {
      headers: response.headers,
      count: response.data.count,
      response: response.data.results,
    };
    setData(data);
    setRequestParams({ ...requestParams, ...apiParams });
  };

  return (
    <React.Fragment>
      <Header />
      <Form handleApiCall={callApi} />
      <div id="requestMethod">Request Method: {requestParams.method}</div>
      <div id="url">URL: {requestParams.url}</div>
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
};

export default App;
