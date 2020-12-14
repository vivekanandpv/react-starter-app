import React, { Fragment } from 'react';
import CDemo from './CDemo';
import CorsPlayground from './CorsPlayground';
import FDemo from './FDemo';

function App() {
  return (
    <Fragment>
      <div className='container my-5'>
        <h3>Starter App</h3>

        <hr />
        {/* <FDemo /> */}
        {/* <CDemo /> */}
        <CorsPlayground />
      </div>
    </Fragment>
  );
}

export default App;
