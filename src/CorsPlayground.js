import React, { Fragment, useState } from 'react';
import axios from 'axios';

const CorsPlayground = (props) => {
  const [message, setMessage] = useState();

  const getHandler = () => {
    axios
      .get('http://localhost:5000/api/sample', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setMessage(response.data);
      });
  };

  const postHandler = () => {
    axios
      .post(
        'http://localhost:5000/api/sample',
        {},
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        setMessage(response.data);
      });
  };

  return (
    <Fragment>
      <button className='btn btn-primary' onClick={getHandler}>
        Make Get request
      </button>
      <hr />
      <pre>{JSON.stringify(message)}</pre>
      <hr />
      <button className='btn btn-primary' onClick={postHandler}>
        Make Post request
      </button>
    </Fragment>
  );
};

export default CorsPlayground;
