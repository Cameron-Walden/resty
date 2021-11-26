import React from 'react';
import { useState } from 'react';

import './App.scss';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

// class App extends React.Component {

  const App = () => {

  // constructor(props) {
  //   super(props);
    // this.state = {
    //   data: null,
    //   requestParams: {},
    // };
    const [data, setData] = useState({});
    const [requestParams, setRequestParams] = useState({});
  

  const callApi = (requestParams) => {
    const apiData = {
      count: 2,
      results: [
        {name: 'fake thing 1', url: 'http://fakethings.com/1'},
        {name: 'fake thing 2', url: 'http://fakethings.com/2'},
      ],
    };
    // this.setState({data, requestParams});
    setData(apiData);
    setRequestParams(requestParams); 
  }

    return (
      <React.Fragment>
        <Header />
        {/* <div>Request Method: {this.state.requestParams.method}</div> */}
        <div>Request Method: {requestParams.method}</div>
        {/* <div>URL: {this.state.requestParams.url}</div> */}
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={data} />
        <Footer />
      </React.Fragment>
    );
  }

export default App;
