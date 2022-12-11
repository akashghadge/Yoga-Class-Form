import React from 'react';
import background from "../assests/images/back.webp"
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/form')
    }
    return (
        <>
            <div class="grandParent">
                <div class="parent">
                    <div class="child1">
                        <img src={background} className="bg-img"></img>
                    </div>
                    <div class="child2">
                        <button className='btn' onClick={handleClick}>Fill Form</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
