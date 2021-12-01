import { useState } from 'react';
import './form.scss';

const Form = (props) => {
  const [method, setMethod] = useState('');
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [showTextArea, setShowTextArea] = useState(false);
  const [requestBody, setRequestBody] = useState('');
  
  const handleMethod = e => {
    e.preventDefault();
    setMethod(e.target.id);
  }
  
  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      // method:'GET',
      // url: 'https://pokeapi.co/api/v2/pokemon',
      method: method,
      url: url,
    };
    props.handleApiCall(formData, requestBody);
  }

  const handleUrl = e => {
    e.preventDefault();
    setUrl(e.target.value);
  }

  const handleTextArea = e => {
    setShowTextArea(!showTextArea);
    setMethod(e.target.id)
  }

  const handleRequestBody = e => {
    setRequestBody(e.target.id);
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input onChange = {handleUrl} name='url' type='text' />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span onClick={handleMethod} id="get">GET</span>
          <span onClick={handleTextArea} id="post">POST</span>
          <span onClick={handleTextArea} id="put">PUT</span>
          <span onClick={handleMethod} id="delete">DELETE</span>
        </label>
        {showTextArea && <textarea name = "postput" rows ="10" cols="29" onChange={handleRequestBody}/>}
      </form>
    </>
  );
}

export default Form;