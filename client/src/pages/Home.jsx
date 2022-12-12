import React from 'react';
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/form')
    }
    return (
        <>
            <div className="d-flex justify-content-center">
                <button className='btn-custom' onClick={handleClick}>Fill Form</button>
            </div>
        </>
    );
}

export default Home;
