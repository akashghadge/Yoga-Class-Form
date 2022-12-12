import React from 'react';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const Home = () => {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/form')
        toast("Let's Start the Journey");
    }
    return (
        <>
            <div className="d-flex justify-content-center">
                <button className='btn-custom' onClick={handleClick}>Fill Form</button>
                <button className='btn-custom mx-4' onClick={() => {
                    navigate('/list')
                }}>User List</button>
            </div>
        </>
    );
}

export default Home;
