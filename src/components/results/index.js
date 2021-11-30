import React from 'react';
import './results.scss';
import ReactJson from 'react-json-view';

const Results = (props) => {
  return (
  <section>
    <pre data-testid="data">
      {props.data 
      ? <ReactJson src={props.data} theme="greenscreen" />
      : <p>Loading...</p>}</pre>
    </section>
  );
}

export default Results;