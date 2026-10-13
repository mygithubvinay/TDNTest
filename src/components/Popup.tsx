import React, { useEffect, useRef } from 'react';
import './Popup.css';

const Popup = ({ children, onClose }:any) => {
    const popupRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleEsc = (e: { key: string; }) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    useEffect(() => {
        // Focus popup for accessibility
        if (popupRef.current) popupRef.current.focus();
    }, []);

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div
                className="popup-content"
                ref={popupRef}
                tabIndex={-1}
                onClick={e => e.stopPropagation()}
            >
                
                {children}
              
            </div>
        </div>
    );
};

export default Popup;
