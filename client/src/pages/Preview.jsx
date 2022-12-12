import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import moment from 'moment';
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
        select_slot: "",
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
                alert(err);
            })
    }
    return (
        <>
            <h2 className='text-center text-orange'>Please Check Your Details !!!</h2>
            <div className='preview-div mx-4'>
                <div>
                    <label className='text-preview mx-4'>
                        Full Name
                    </label>
                    <label className='text-preview'>
                        {userData.fname + " " + userData.lname}
                    </label>
                </div>
                <div>
                    <label className='text-preview mx-4'>
                        Email
                    </label>
                    <label className='text-preview'>
                        {userData.email}
                    </label>
                </div>

                <div>
                    <label className='text-preview mx-4'>
                        Date of Birth
                    </label>
                    <label className='text-preview'>
                        {moment(userData.dob).format('DD-MM-YYYY')}
                    </label>
                </div>
                <div>
                    <label className='text-preview mx-4'>
                        Date of Enrollment
                    </label>
                    <label className='text-preview'>
                        {moment(userData.enroll_date).format('DD-MM-YYYY')}
                    </label>
                </div>
                <div>
                    <label className='text-preview mx-4'>
                        Selected Slot
                    </label>
                    <label className='text-preview'>
                        {userData.select_slot}
                    </label>
                </div>
                <div>
                    <label className='text-preview mx-4'>
                        Fees Due
                    </label>
                    <label className='text-preview'>
                        500/-
                    </label>
                </div>

                <button onClick={payFees} className="btn-custom m-4">Pay Fees</button>
            </div>
        </>
    );
}

export default Preview;
