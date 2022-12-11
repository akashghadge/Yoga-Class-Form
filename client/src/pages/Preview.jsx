import React, { useState, useEffect } from 'react';
import axios from 'axios'
const Preview = () => {
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
        console.log(userDataLocal);
        setUserData(userDataLocal);
    }, []);
    function payFees(e) {
        e.preventDefault();
        const url = "http://localhost:5000/api/payment/pay";
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
