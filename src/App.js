import React, { Fragment } from 'react';
import TableOne from './TableOne';
import TableTwo from './TableTwo';

function App() {
  return (
    <Fragment>
      <div className='container my-5'>
        <h3>Starter App</h3>

        <hr />

        <TableTwo />
        {/* <TableOne /> */}
      </div>
    </Fragment>
  );
}

export default App;
