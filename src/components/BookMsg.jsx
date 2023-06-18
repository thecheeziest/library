import React, { useEffect } from 'react';

const BookMsg = ( {msg, isMsg, setIsMsg, onoff} ) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsMsg(false);
        }, 2000);
        return() => clearTimeout(timer);
    }, [isMsg])

    return (
        <div className={`show ${isMsg ? onoff : ""}`}>
            {msg}
        </div>
    );
};

export default BookMsg;