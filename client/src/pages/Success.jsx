import React from 'react';
import { useNavigate } from 'react-router-dom'
import "./success.css"
const Success = () => {
    const navigate = useNavigate();

    return (
        <>
            <h2 className='text-center text-orange'>Payment Done !!!</h2>
            <div class="success-checkmark">
                <div class="check-icon">
                    <span class="icon-line line-tip"></span>
                    <span class="icon-line line-long"></span>
                    <div class="icon-circle"></div>
                    <div class="icon-fix"></div>
                </div>
            </div>
            <div className='d-flex justify-content-center m-4'>
                <button onClick={() => {
                    navigate('/')
                }} className="btn-custom">Go To Home</button>
            </div>
        </>
    );
}

export default Success;
