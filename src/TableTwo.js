import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import customers from './data.json';

const TableTwo = () => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [rowData, setRowData] = useState(null);

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
    setRowData(customers);
  };

  const onPageSizeChanged = (newPageSize) => {
    var value = document.getElementById('page-size').value;
    gridApi.paginationSetPageSize(Number(value));
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div className='example-wrapper'>
        <div className='example-header'>
          Page Size:
          <select onChange={() => onPageSizeChanged()} id='page-size'>
            <option value='10' selected=''>
              10
            </option>
            <option value='100'>100</option>
            <option value='500'>500</option>
            <option value='1000'>1000</option>
          </select>
        </div>
        <div
          id='myGrid'
          style={{
            height: '500px',
            width: '100%',
          }}
          className='ag-theme-alpine'
        >
          <AgGridReact
            autoGroupColumnDef={{
              headerName: 'Group',
              minWidth: 170,
              field: 'firstName',
              valueGetter: function (params) {
                if (params.node.group) {
                  return params.node.key;
                } else {
                  return params.data[params.colDef.field];
                }
              },
              headerCheckboxSelection: true,
              cellRenderer: 'agGroupCellRenderer',
              cellRendererParams: { checkbox: true },
            }}
            defaultColDef={{
              editable: true,
              enableRowGroup: true,
              enablePivot: true,
              enableValue: true,
              sortable: true,
              resizable: true,
              filter: true,
              flex: 1,
              minWidth: 100,
            }}
            suppressRowClickSelection={true}
            groupSelectsChildren={true}
            debug={true}
            rowSelection={'multiple'}
            rowGroupPanelShow={'always'}
            pivotPanelShow={'always'}
            enableRangeSelection={true}
            pagination={true}
            paginationPageSize={10}
            paginationNumberFormatter={function (params) {
              return '[' + params.value.toLocaleString() + ']';
            }}
            onGridReady={onGridReady}
            rowData={rowData}
            onRowSelected={(e) => console.log(e)}
          >
            <AgGridColumn headerName='ID' field='id' minWidth={170} />
            <AgGridColumn field='firstName' />
            <AgGridColumn field='lastName' />
            <AgGridColumn field='email' />
            <AgGridColumn field='gender' />
            <AgGridColumn field='city' />
          </AgGridReact>
        </div>
      </div>
    </div>
  );
};

export default TableTwo;
