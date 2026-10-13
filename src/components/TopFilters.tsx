import React, { useState } from 'react';
import Popup from './Popup'; // Import the popup component

const TopFilters = ({ filters, onChange }:any) => {
    const [showPopup, setShowPopup] = useState(false);

    const handleSettingsClick = () => setShowPopup(true);
    const handleClosePopup = () => setShowPopup(false);

    return (
        <div className="top-filters">
            <div className="filter-input" >
                <label htmlFor="circuit-filter">Circuit</label>
                <input
                    type="text"
                    id="circuit-filter"
                    placeholder="Enter Circuit..."
                    value={filters['Circuit'] || ''}
                    onChange={e => onChange('Circuit', e.target.value)}
                />
            </div>

            <label className="custom-checkbox mx-3">
                <input type="checkbox" />
                <span className="checkmark"></span>
                <span className="label-text"> Enable Device Enable Device Enable Device Enable Device</span>
            </label>

            <div className="filter-input" >
                <label htmlFor="device-filter">Device</label>
                <input
                    type="text"
                    id="device-filter"
                    placeholder="Enter Device..."
                    value={filters['Device'] || ''}
                    onChange={e => onChange('Device', e.target.value)}
                />
            </div>
            <div className="filter-input" >
                <label htmlFor="structure-filter">Structure</label>
                <input
                    type="text"
                    id="structure-filter"
                    placeholder="Enter Structure..."
                    value={filters['Structure'] || ''}
                    onChange={e => onChange('Structure', e.target.value)}
                />
            </div>

            <button className="settings-btn" onClick={handleSettingsClick}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09c.7 0 1.34-.4 1.51-1a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06c.48.48 1.14.6 1.82.33h.09c.7 0 1.34.4 1.51 1V3a2 2 0 0 1 4 0v.09c0 .7.4 1.34 1 1.51a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09c0 .7.4 1.34 1 1.51H21a2 2 0 0 1 0 4h-.09c-.7 0-1.34.4-1.51 1z" />
                </svg>
                Export Option
            </button>

            <div className="info-icon">
                <svg fill="#3084f3ff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>info</title> <path d="M11.188 4.781c6.188 0 11.219 5.031 11.219 11.219s-5.031 11.188-11.219 11.188-11.188-5-11.188-11.188 5-11.219 11.188-11.219zM11.063 8.906c-0.313 0.375-0.469 0.813-0.469 1.281 0 0.375 0.125 0.688 0.313 0.906 0.219 0.219 0.531 0.344 0.844 0.344 0.438 0 0.844-0.188 1.156-0.563 0.281-0.344 0.438-0.844 0.438-1.375 0-0.313-0.094-0.594-0.313-0.813s-0.531-0.344-0.844-0.344c-0.406 0-0.813 0.188-1.125 0.563zM8.219 15.375l0.375 0.406c0.281-0.313 0.563-0.563 0.75-0.719 0.188-0.125 0.344-0.188 0.469-0.188 0.094 0 0.188 0.031 0.25 0.094 0.031 0.094 0.063 0.188 0.063 0.344 0 0.781-0.094 1.281-0.5 3.156s-0.625 3.25-0.625 4.156c0 0.344 0.063 0.594 0.188 0.75 0.094 0.156 0.281 0.281 0.531 0.281 0.406 0 1-0.313 1.688-0.844 0.688-0.563 1.375-1.344 2.125-2.344l-0.406-0.344c-0.25 0.313-0.5 0.531-0.688 0.688-0.188 0.125-0.344 0.25-0.469 0.25-0.094 0-0.188-0.094-0.25-0.156-0.031-0.094-0.063-0.219-0.063-0.406 0-0.125 0.031-0.531 0.156-1.25 0.094-0.719 0.063-0.719 0.25-1.781 0.031-0.313 0.125-0.75 0.219-1.281 0.25-1.594 0.406-2.563 0.406-2.875 0-0.281-0.094-0.531-0.188-0.688-0.125-0.156-0.313-0.219-0.531-0.219-0.375 0-0.875 0.281-1.563 0.781-0.688 0.531-1.375 1.25-2.188 2.188z"></path> </g></svg>
                <span className="tool-tip">Description goes here. Description goes here.Description goes here.Description goes here.Description goes here.Description goes here.Description goes here.Description goes here.Description goes here.Description goes here.Description goes here.</span>
            </div>
            {showPopup && (
                <Popup onClose={handleClosePopup}>
                    {/* You can put any content here */}
                    <h3>Export Options</h3>
                    
                          <svg className='popup-close' onClick={handleClosePopup} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#0F1729"></path> </g></svg>
                     
                    <span className="error">
                        Required fields are indicated by a red asterisk*
                    </span>
                    <div className="popup-body">
                        <div className="input-sec">
                            <div className="filter-input" >
                                <label htmlFor="output-Type">Output Type <span className="required">*</span></label>
                                <select id="output-Type">
                                    <option value="">Select Output...</option>
                                    <option value="pdf">PDF</option>
                                    <option value="excel">Excel</option>
                                    <option value="csv">CSV</option>
                                </select>
                            </div>
                            <div className="filter-input" >
                                <label htmlFor="Bundled">Bundled <span className="required">*</span></label>
                                <select id="Bundled">
                                    <option value="">Select Output...</option>
                                    <option value="pdf">PDF</option>
                                    <option value="excel">Excel</option>
                                    <option value="csv">CSV</option>
                                </select>

                            </div>
                        </div>
                        <div className='d-block mt-3'>
                            <label className='mb-3'><strong>Trace Options</strong> <span className="required">*</span></label>
                            <div className="row">
                                <div className="col-12">
                                    <label className="custom-checkbox">
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                        <span className="label-text">Label Goes here</span>
                                    </label>
                                </div>
                                <div className="col-12">
                                    <div className="row px-4">
                                        <div className="col">
                                            <label className="custom-radio mb-3">
                                                <input type="radio" name="deviceMode" value="auto" defaultChecked />
                                                <span className="radiomark"></span>
                                                <span className="label-text">Auto Mode</span>
                                            </label>
                                            <label className="custom-checkbox">
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                                <span className="label-text"> Enable DeviceEnable</span>
                                            </label>
                                        </div>

                                        <div className="col">
                                            <label className="custom-radio">
                                                <input type="radio" name="deviceMode" value="manual" />
                                                <span className="radiomark"></span>
                                                <span className="label-text">Manual Mode</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='d-block mt-3'>
                            <div className="title mb-3 d-flex">
                                <label className=' mr-3'><strong>Output Options</strong> <span className="required">*</span></label>
                                <label className="custom-checkbox ">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                    <span className="label-text"> Check / Uncheck All</span>
                                </label>
                            </div>

                            <div className="row">

                                <div className="col-12">
                                    <div className="row px-4">
                                        <div className="col">
                                            <label className="custom-checkbox mb-3 d-flex">
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                                <span className="label-text"> Label Goes here</span>
                                            </label>
                                            <label className="custom-checkbox mb-3 d-flex">
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                                <span className="label-text"> Label Goes here</span>
                                            </label>
                                        </div>

                                        <div className="col">
                                            <label className="custom-checkbox mb-3 d-flex">
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                                <span className="label-text"> Label Goes here</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                   <div className="popup-footer">
                     <button onClick={handleClosePopup}>Save & Close</button>
                   </div>
                </Popup>
            )}
        </div>
    );
};

export default TopFilters;
