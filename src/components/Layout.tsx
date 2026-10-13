import React, { useState } from 'react';
import reactLogo from '../assets/react.svg'
import DeviceListTree from './DeviceListTree';
import DeviceInfo from './DeviceInfo';
import TopFilters from './TopFilters';
import deviceList from '../data/deviceList.json';

const Layout = () => {
    const [filters, setFilters] = useState({});
    const [selectedDevice, setSelectedDevice] = useState(deviceList[0]);

    const handleFilterChange = (key: any, value: any) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    return ( <>
      
            <div className="header">
                <a className='logo' href="#"><img src={reactLogo} alt="React Logo" /></a>
                <h1>ABC Management</h1>
            </div>
            <div className="filters">
                <TopFilters filters={filters} onChange={handleFilterChange} />
            </div>
            <div className="layout">
                <DeviceListTree devices={deviceList} onSelect={setSelectedDevice} />
                {/* <div className="main-panel"> */}

                    <DeviceInfo data={selectedDevice} />
                {/* </div> */}
            </div>
</>
       
    );
};

export default Layout;
