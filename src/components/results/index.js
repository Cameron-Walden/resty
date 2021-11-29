import React from 'react';
import './results.scss';

// class Results extends React.Component {
//   render() {
//     return (
//       <section>
//         <pre>{this.props.data ? JSON.stringify(this.props.data, undefined, 2) : null}</pre>
//       </section>
//     );
//   }
// }

const Results = (props) => {
  // console.log(props, 'THIS IS PROPS IN RESULTS')
  return (
  <section>
    {/* <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre> */}
    <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : <p>Loading...</p>}</pre>
    </section>
  );
}

export default Results;