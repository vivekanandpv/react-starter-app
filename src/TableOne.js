import React, { Fragment, useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import customers from './data.json';

const TableOne = (props) => {
  const [rowData, setRowData] = useState(customers);

  return (
    <Fragment>
      <div className='ag-theme-alpine' style={{ height: 600, width: '100%' }}>
        <AgGridReact rowData={rowData}>
          <AgGridColumn field='id' sortable={true} filter={true}></AgGridColumn>
          <AgGridColumn
            field='firstName'
            sortable={true}
            filter={true}
          ></AgGridColumn>
          <AgGridColumn
            field='lastName'
            sortable={true}
            filter={true}
          ></AgGridColumn>
          <AgGridColumn
            field='email'
            sortable={true}
            filter={true}
          ></AgGridColumn>
          <AgGridColumn
            field='gender'
            sortable={true}
            filter={true}
          ></AgGridColumn>
          <AgGridColumn
            field='city'
            sortable={true}
            filter={true}
          ></AgGridColumn>
        </AgGridReact>
      </div>
    </Fragment>
  );
};

export default TableOne;
