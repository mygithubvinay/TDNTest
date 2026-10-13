import React, { useState, useEffect } from 'react';

const ChevronDown = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M6 9l6 6 6-6" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronUp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M6 15l6-6 6 6" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TreeNode = ({
  node,
  level,
  onSelect,
  activeId,
  globalExpandLevel,
  globalExpandActive,
  resetManualExpand,
  updateManualExpandCount
}:any) => {
  const [manualExpand, setManualExpand] = useState<any>(null);

  useEffect(() => {
    if (resetManualExpand) setManualExpand(null);
  }, [resetManualExpand]);

  const handleClick = () => onSelect(node);

  const toggleExpand = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    const next = manualExpand === null ? true : !manualExpand;
    setManualExpand(next);
    updateManualExpandCount(next ? 1 : -1);
  };

  const nestedKeys = Object.keys(node).filter(
    key => Array.isArray(node[key]) && node[key].every(child => typeof child === 'object')
  );

  const isLeaf = nestedKeys.length === 0 || nestedKeys.every(key => node[key].length === 0);

  const expanded =
    manualExpand !== null
      ? manualExpand
      : globalExpandActive
        ? level <= globalExpandLevel
        : false;

  return (
    <li>
      <a
        className={`tree-node${activeId === node.id ? ' active' : ''}`}
        onClick={handleClick}
      >
        {nestedKeys.length > 0 && (
          <span className="chevron" onClick={toggleExpand}>
            {expanded ? <ChevronUp /> : <ChevronDown />}
          </span>
        )}
        <span className="label">{node['Device Type'] || 'Device'}</span>
      </a>
      {expanded && nestedKeys.length > 0 && (
        <ul className="tree-child">
          {nestedKeys.map(key =>
            node[key].map((child: { id: any; }) => (
              <TreeNode
                key={child.id}
                node={child}
                level={level + 1}
                onSelect={onSelect}
                activeId={activeId}
                globalExpandLevel={globalExpandLevel}
                globalExpandActive={globalExpandActive}
                resetManualExpand={resetManualExpand}
                updateManualExpandCount={updateManualExpandCount}
              />
            ))
          )}
        </ul>
      )}
    </li>
  );
};

const DeviceListTree = ({ devices, onSelect }:any) => {
  const [activeId, setActiveId] = useState(null);
  const [globalExpandLevel, setGlobalExpandLevel] = useState<any>(null);
  const [globalExpandActive, setGlobalExpandActive] = useState(false);
  const [resetManualExpand, setResetManualExpand] = useState(false);
  const [manualExpandCount, setManualExpandCount] = useState(0);

  const handleSelect = (device: { id: React.SetStateAction<null>; }) => {
    setActiveId(device.id);
    onSelect(device);
  };

  const updateManualExpandCount = (delta: number) => {
    setManualExpandCount(prev => Math.max(0, prev + delta));
  };

  const toggleGlobalExpand = (level: number | React.SetStateAction<null>) => {
    setResetManualExpand(true);
    setTimeout(() => setResetManualExpand(false), 0);
    if (globalExpandActive || manualExpandCount > 0) {
      setGlobalExpandActive(false);
      setGlobalExpandLevel(null);
      setManualExpandCount(0);
    } else {
      setGlobalExpandActive(true);
      setGlobalExpandLevel(level);
    }
  };

  const isExpanded = globalExpandActive || manualExpandCount > 0;

  return (
    <div className="sidebar">
      <div className="box-head">
        <h3>DEVICE LIST</h3>
        <label className="custom-checkbox mx-3">
          <input type="checkbox" />
          <span className="checkmark"></span>
          <span className="label-text">Enable Device</span>
        </label>
      </div>

      <button className="collapse-all-btn" onClick={() => toggleGlobalExpand(2)}>
        {isExpanded ? 'Collapse All' : 'Expand All'}
      </button>

     <div className="tree-node-block">
       <ul className="tree-root">
        {devices.map((device: { id: any; }) => (
          <TreeNode
            key={device.id}
            node={device}
            level={0}
            onSelect={handleSelect}
            activeId={activeId}
            globalExpandLevel={globalExpandLevel}
            globalExpandActive={globalExpandActive}
            resetManualExpand={resetManualExpand}
            updateManualExpandCount={updateManualExpandCount}
          />
        ))}
      </ul>
     </div>

      <div className="btn-sec">
        <button>Export</button>
        <button>Export</button>
        <button>Export</button>
        <button>Export</button>
      </div>
    </div>
  );
};

export default DeviceListTree;
