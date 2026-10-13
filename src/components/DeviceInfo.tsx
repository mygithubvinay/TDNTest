import React from 'react';

const fields = [
  'Facility ID', 'OH', 'Structure', 'DARTU', 'Device Type',
  'Device Info 1', 'Device Info 2', 'Device Info 3', 'Device Info 4', 'Device Info 5',
  'Country', 'Troubleman', 'HF', 'Community'
];

const DeviceInfo = ({ data }:any) => (
  <div className="device-info">    
    <h3>DEVICE INFORMATION</h3>
   <div className="info">
     {fields.map(field => (
      <div key={field} className="info-row">
        <label>{field}:</label>
        <span>{data?.[field] || '—'}</span>
      </div>
    ))}
    <hr/>
    {fields.map(field => (
      <div key={field} className="info-row">
        <label>{field}:</label>
        <span>{data?.[field] || '—'}</span>
      </div>
    ))}
   </div>
   <div className="err-msg">
    aa
   </div>
  </div>
);

export default DeviceInfo;
