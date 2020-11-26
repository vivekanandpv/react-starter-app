import React, { Component, Fragment } from 'react';
import { httpClient } from './utils/http-client';

class CDemo extends Component {
  state = { page: 0, perPage: 0, isLoading: true };

  componentDidMount() {
    httpClient
      .get('users?page=2', {
        headers: {
          'X-Custom-Header': 'custom-value-goes-here',
          'X-Custom-Header2': 'custom-value-2-goes-here',
        },
      })
      .then((response) => {
        this.setState((state, props) => {
          return {
            page: response.data.page,
            perPage: response.data.per_page,
            isLoading: false,
          };
        });
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }

  render() {
    return (
      <Fragment>
        <h3>Class Component Demo</h3>
        <hr />
        <p>
          {this.state.isLoading
            ? 'Loading...'
            : `${this.state.page}/${this.state.perPage}`}
        </p>
      </Fragment>
    );
  }
}

export default CDemo;
