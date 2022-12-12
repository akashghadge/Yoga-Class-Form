import React from 'react';
import { useNavigate } from 'react-router-dom';
const Error = () => {
    const navigate = useNavigate();
    return (
        <>
            <h2 className='text-center text-orange'>404 Oops !!!</h2>
            <div className='d-flex justify-content-center m-4'>
                <button onClick={() => {
                    navigate('/')
                }} className="btn-custom">Go To Home</button>
            </div>
        </>
    );
}

export default Error;
