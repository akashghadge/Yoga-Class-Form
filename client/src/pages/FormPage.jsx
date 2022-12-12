import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import urls from '../api/urls';

const FormPage = () => {
    const WarningAlert = (text) => {
        toast.warn(text, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const SuccessAlert = (text) => {
        toast.success(text, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const navigate = useNavigate();
    const [allCurrentData, setAllCurrentData] = useState({
        fname: "",
        lname: "",
        email: "",
        dob: new Date(),
        enroll_date: new Date(),
        slots: ['6-7AM', '7-8AM', '8-9AM', '5-6PM'],
        select_slot: ""
    });
    let [dateChange, setDateChange] = useState(0);

    function inputChange(event) {
        const { id, value } = event.target
        if (id == 'dob') setDateChange(1);
        setAllCurrentData((prev) => {
            return {
                ...prev,
                [id]: value
            }
        })
    }
    function invalid() {
        const { fname, lname, email, select_slot, dob, enroll_date } = allCurrentData;
        if (!fname || !lname || !email || !select_slot) {
            WarningAlert('Input Field is Empty')
            return 1;
        }
        let age_ceil = Math.ceil(moment().diff(dob, 'years', true));
        let age_floor = Math.floor(moment().diff(dob, 'years', true));
        if (age_floor < 18 || age_ceil > 65) {
            WarningAlert("Your age is not between 18-65");
            return 1;
        }
        let enroll_date_is_past = Math.floor(moment().diff(enroll_date, 'days', true));
        if (enroll_date_is_past > 0) {
            WarningAlert("Enrollment Date should be in future or today");
            return 1;
        }
    }
    function submitForm(e) {
        e.preventDefault();
        if (invalid()) {
            return 0;
        }
        const url = `${urls.base}/api/form/submit`;
        axios.post(url, allCurrentData)
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res.data));
                SuccessAlert("Form Filled Successfully")
                navigate('/preview')
            })
            .catch((err) => {
                if (err.response.status == 400) {
                    WarningAlert("Your already filled form and payed fees as well")
                }
                if (err.response.status == 303) {
                    localStorage.setItem('user', JSON.stringify(err.response.data));
                    WarningAlert("You Already Filled form for this Month")
                    navigate('/preview')
                }
                WarningAlert(err)
            })
    }
    return (
        <>
            <h2 className='text-center text-orange'>Join Today !!!</h2>
            <div className='m-3'>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="fname" placeholder="Akash" onChange={inputChange} value={allCurrentData.fname} required></input>
                    <label htmlFor="fname">Enter First Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="lname" placeholder="Ghadge" onChange={inputChange} value={allCurrentData.lname} required></input>
                    <label htmlFor="lname">Enter Last Name</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="email" placeholder="akash@gmail.com" onChange={inputChange} value={allCurrentData.email} required></input>
                    <label htmlFor="email">Enter Email</label>
                </div>
                <div className='d-flex justify-content-around'>
                    <div>
                        <label>Enter Date Of Birth</label>
                    </div>
                    <div>
                        <input type="date" id="dob" onChange={inputChange} value={allCurrentData.dob} className="form-control" max={moment().format("YYYY-MM-DD")}></input>
                        <p className={dateChange ? 'd-visible text-muted' : 'invisible'} style={{ textAlign: 'right' }}>Your age is {moment().diff(allCurrentData.dob, 'years', true).toFixed()} Years</p>
                    </div>
                </div>
                <div className='d-flex justify-content-around'>
                    <div>
                        <label>Select Enrollment Date</label>
                    </div>
                    <div>
                        <input type="date" id="enroll_date" onChange={inputChange} className="form-control" value={allCurrentData.enroll_date} min={moment().format("YYYY-MM-DD")}></input>
                    </div>
                </div>
                <div>
                    <label>
                        Slots Available
                    </label>
                    <div className='d-flex justify-content-evenly my-3'>
                        {allCurrentData.slots.map((v, i) => {
                            return <button className={v == allCurrentData.select_slot ? 'btn btn-custom-orange' : 'btn btn-custom-border-orange'} name="slot-options" aria-pressed="true" id="select_slot" value={v} key={v} onClick={inputChange}>{v}</button>
                        })}
                    </div>
                </div>
                <div className='d-flex justify-content-center m-4'>
                    <button onClick={submitForm} className="btn-custom">Submit</button>
                </div>
            </div>
        </>
    );
}

export default FormPage;
