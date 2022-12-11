import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Preview = () => {
    const navigate = useNavigate();
    let [userData, setUserData] = useState({
        _id: "",
        email: "",
        fname: "",
        lname: "",
        dob: "",
        enroll_date: "",
        fees_paid: false,
        select_slot: 1,
        createdAt: "",
    })
    useEffect(() => {
        let userDataLocal = JSON.parse(localStorage.getItem('user'));
        setUserData(userDataLocal);
    }, []);
    function payFees(e) {
        e.preventDefault();
        const url = "http://localhost:5000/api/payment/pay";
        axios.post(url, userData)
            .then((data) => {
                navigate('/success');
                localStorage.setItem('user', null)
            })
            .catch((err) => { 
                // pop up for failed payment
            })
    }
    return (
        <>
            <p>
                {userData.fname}
            </p>
            <p>500/-</p>
            <button onClick={payFees}>Pay Fees</button>
        </>
    );
}

export default Preview;
