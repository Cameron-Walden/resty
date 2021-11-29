import React from 'react';
// import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

  class App extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        data: null,
        requestParams: {},
      };
    }
    
    callApi = async (requestParams) => {
      const apiUrl = requestParams.url;
      const response = await axios.get(apiUrl);
  
      const data = {
        Headers: response.headers,
        count: response.data.count,
        Response: response.data.results
      };
      this.setState({data, requestParams});
    }
  
    render() {
      return (
        <React.Fragment>
          <Header />
          <Form handleApiCall={this.callApi}/>
          <div id='requestMethod'>Request Method: {this.state.requestParams.method}</div>
          <div id='url'>URL: {this.state.requestParams.url}</div>
          <Results data={this.state.data} />
          <Footer />
        </React.Fragment>
      );
    }
  }

  // const App = () => {

  // constructor(props) {
  //   super(props);
    // this.state = {
    //   data: null,
    //   requestParams: {},
    // };
    // const [data, setData] = useState(null);
    // const [requestParams, setRequestParams] = useState({});

  
  // const callApi = (reqParams) => {
  //   const apiData = {
  //     count: 2,
  //     results: [
  //       {name: 'fake thing 1', url: 'http://fakethings.com/1'},
  //       {name: 'fake thing 2', url: 'http://fakethings.com/2'},
  //     ],
  //   };
  //   // this.setState({data, requestParams});
  //   setData(apiData);
  //   setRequestParams(reqParams); 
  // }


  //   return (
  //     <React.Fragment>
  //       <Header />
  //       <div>Request Method: {requestParams.method}</div>
  //       <div>URL: {requestParams.url}</div>
  //       <Form handleApiCall={callApi} />
  //       <Results data={data} />
  //       <Footer />
  //     </React.Fragment>
  //   );
  // }

  
export default App;
