import { useState } from 'react';
import './form.scss';

const Form = (props) => {
  const [method, setMethod] = useState('');
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  // const [requestData, setRequestData] = useState('');
  
  const handleMethod = e => {
    e.preventDefault();
    setMethod(e.target.id);
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    // const jsonString = e.target.json.value;
    const formData = {
      // method:'GET',
      // url: 'https://pokeapi.co/api/v2/pokemon',
      method: method,
      url: url,
      // body: JSON.parse(requestData),
    };
    props.handleApiCall(formData);
  }

  const handleUrl = e => {
    e.preventDefault();
    setUrl(e.target.value);
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input onChange = {handleUrl} name='url' type='text' />
          {/* <input name='url' type='text' /> */}
          {/* <button onClick ={handleSubmit} type="submit">GO!</button> */}
          <button type="submit">GO!</button>
        </label>
        <label onClick = {handleMethod} className="methods">
          <span id="get">GET</span>
          <span id="post">POST</span>
          <span id="put">PUT</span>
          <span id="delete">DELETE</span>
        </label>
        {/* <textarea name ="json"/> */}
      </form>
    </>
  );
}

export default Form;