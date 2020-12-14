import React, { Fragment, useState, useEffect } from 'react';
import { httpClient } from './utils/http-client';

const FDemo = (props) => {
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    httpClient
      .get('customers', {
        headers: {
          'X-Custom-Header': 'custom-value-goes-here',
          'X-Custom-Header2': 'custom-value-2-goes-here',
        },
      })
      .then((response) => {
        setPage(response.data.page);
        setPerPage(response.data.per_page);
        setData(response.data.data);
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }, []);

  const getData = () => {
    httpClient
      .get('customers', {
        headers: {
          'X-Custom-Header': 'custom-value-goes-here',
          'X-Custom-Header2': 'custom-value-2-goes-here',
        },
      })
      .then((response) => {
        setPage(response.data.page);
        setPerPage(response.data.per_page);
        setData(response.data.data);
      })
      .catch((error) => {
        console.log('Error', error);
      });
  };

  const postData = () => {
    const person = {
      name: 'Debanjan',
      city: 'Kolkata',
    };

    httpClient
      .post('users', person, {
        headers: {
          'X-Custom-Header': 'custom-value-goes-here',
          'X-Custom-Header2': 'custom-value-2-goes-here',
        },
      })
      .then((response) => {
        alert(response.data.createdAt);
      })
      .catch((error) => {
        console.log('Error', error);
      });
  };
  return (
    <Fragment>
      <button className='btn btn-primary' onClick={getData}>
        Get Data
      </button>

      <hr />

      <p>
        {page}/{perPage}
      </p>
    </Fragment>
  );
};

export default FDemo;
